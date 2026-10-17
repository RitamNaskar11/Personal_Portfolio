from email import message
import os 

from flask import Flask, jsonify, request 
from flask_cors import CORS
from dotenv import load_dotenv

from groq import Groq

load_dotenv()

app = Flask(__name__)
CORS(app)

api_key = os.getenv("GROQ_API_KEY")
client = Groq(api_key=api_key)

@app.route('/' , methods=["GET"])
def home():
    return jsonify({
        'message': 'ok',
        'status': 'Success'
    })

@app.route('/api/health',methods=["GET"])
def health():
    return jsonify({
        'status':"healthy",
        'service':"running backend service",
        "ai_configured": client is not None
    })

@app.route('/api/chat',methods = ["POST"])
def chat():
    if client is None:
        return jsonify({
        "error": "Groq API key missing. Check backend/.env"
    }), 500

    data = request.get_json(silent=True) or {}
    message = data.get("message","")


    if not isinstance(message,str) or not message.strip():
        return jsonify({
        "error":"Enter a valid message"

    }),400

    if len (message)> 2000:
        return jsonify({
            'error':'Message too long.'
        }) , 400

    try:
        response = client.chat.completions.create(
            model = "openai/gpt-oss-120b",
            messages = [
                {
                    "role": "system",
                    "content" : (
                        "You are Ritam AI, an assistant for Ritam Naskar's "
                        "developer portfolio. Known projects include "
                        "FoodBridge AI, Resume Analyzer and Person Counter. "
                        "Answer questions about these projects and his "
                        "developer portfolio. Do not invent personal "
                        "details or claim unknown achievements."
                    )
                },
                {
                    "role":"user",
                    "content": message.strip()
                }
            ],
        max_tokens = 500
        )
        answer = response.choices[0].message.content

        return jsonify({
            "answer": answer or "Sorry, no answer was generated."
        })
    except Exception as e:
        app.logger.exception("Groq API request failed")
        return jsonify({
            "error": str(e)
        }), 502

    

if __name__ == '__main__':
    app.run(debug= True, port = 5000)

