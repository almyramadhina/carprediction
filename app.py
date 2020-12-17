import pandas as pd
import pickle
from flask import request, Flask, jsonify, render_template
from flask_cors import CORS
from sklearn.preprocessing import StandardScaler

app = Flask(__name__)

filename = 'model.pkl'
model = pickle.load(open(filename, 'rb'))

@app.route('/predict', methods=['POST'])
def predictPrice():
    try:
        #get data
        year = request.form['year']
        enghp = request.form['enginehp']
        engcyl = request.form['enginecylinder']
        
        x_test = [[year, enghp, engcyl]]
    
        #fit transform inputs from user
        #sc_x=StandardScaler()
        #x=sc_x.fit_transform(x_test)

        #make prediction
        pred = model.predict(x_test)

        #show prediction
        if pred is not None:
            retval = {
                'status' : 'sukses',
                'result' : str(pred[0])
            }
            return jsonify(retval)
        else:
            return "Kosong"

    except Exception as e:
        return str(e.args)

@app.route('/')
def home():
   return render_template("index.html")

if __name__ == '__main__':
    app.run(host='0.0.0.0')

