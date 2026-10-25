from flask import Flask, jsonify
from flask_cors import CORS
from dotenv import load_dotenv

load_dotenv()

app = Flask(__name__)
CORS(app)

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
        'service':"running backend service"
    })

if __name__ == '__main__':
    app.run(debug=True, port=5000)

