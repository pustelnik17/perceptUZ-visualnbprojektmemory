from flask import Flask, jsonify, request
import pathlib
import pandas as pd

app = Flask(__name__)

@app.route('/api/results', methods=['POST'])
def createResultFile():
    name = request.json.get("name")
    payload = request.json.get("payload")
    if name:
        storageDir = pathlib.Path.cwd() / "server" / "data"
        pd.read_json(payload).to_excel(storageDir / f"{name}.xlsx")
        with open(storageDir / f"{name}.json", "w+") as f:
            f.write(payload)

        return jsonify({"status": "file created"})
    return jsonify({"error": "No message provided"}), 400

if __name__ == '__main__':
    app.run(debug=True)
