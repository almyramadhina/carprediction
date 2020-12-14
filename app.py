import pandas as pd
from flask import Flask, jsonify, request, render_template
import pickle
import lightgbm
import os

# Load model
model = pickle.load(open('lgb_model.pkl', 'rb'))

# App
app = Flask(__name__)

# routes
@app.route('/')
def home():
    return render_template("index.html")

@app.route('/', methods=['POST'])
def predict():
    # get data
    data = request.get_json(force=True)

    # convert data into dataframe
    data.update((x, [y]) for x, y in data.items())
    data_df = pd.DataFrame.from_dict(data)
    print(data_df.dtypes)

    # predictions
    result = model.predict_proba(data_df)[:,1]

    # send back to browser
    output = {'results': result[0]}
    print("output", output)
    # return data
    return jsonify(results=output)


port = int(os.environ.get("PORT", 5000))

if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0', port=port)
