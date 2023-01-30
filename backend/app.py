from flask import Flask
from flask import jsonify
from flask_cors import CORS
import rahmah_makan_vision


app = Flask(__name__)
CORS(app)

@app.route('/api/fridges')
def index():

    objects_num, labels, img, bnd_box, cnfdce = rahmah_makan_vision.get_objects_num_with_labels()

    usage = 0
    if objects_num <= 4 and objects_num >= 0:
        usage = 1
    if objects_num > 4 and objects_num <= 6:
        usage = 2
    if objects_num > 6:
        usage = 3

    #usage 
    #1 corresponds to not full
    #2 corresponds to almost full
    #3 corresponds to completely full

    return jsonify(
        objects_num = objects_num,
        labels = labels,
        usage = usage
    )


if __name__ == '__main__':
    #debug=True doesn't require you to run the code with every change
    app.run(debug=True)
