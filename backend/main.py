from flask import Flask, render_template, request, session, redirect, jsonify
import firebase_admin as firebase
from firebase_admin import credentials, firestore, auth, exceptions
import requests as r
from flask_cors import CORS
config = {
    'API_KEY': "AIzaSyCYazJBxRqBMx1nwQgQNMxZj7f3hQgp4a8",
    'USER_SIGN_IN': "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyCYazJBxRqBMx1nwQgQNMxZj7f3hQgp4a8",
    'OOB_CODE': 'https://identitytoolkit.googleapis.com/v1/accounts:sendOobCode?key=AIzaSyCYazJBxRqBMx1nwQgQNMxZj7f3hQgp4a8'
}
# firebase stuff DO NOT TOUCH
cred = credentials.Certificate("./creds.json")
main = firebase.initialize_app(cred)
db = firestore.client()

# doc_ref = db.collection('RahmaDB').document('SOMETHINGELSEENTIRELY')

# doc = doc_ref.get()
# if doc.exists:
#     print(f'Document data: {doc.to_dict()}')
# else:
#     print(u'No such document!')
app = Flask(__name__)
CORS(app)
app.config["SECRET_KEY"] = "OCML3BRawWEUeaxcuKHLpw"
# main landing page

@app.route('/endpoint')
def api():
    # print(request)
    data = jsonify({"ibrahim":"bynekak"})
    return data

@app.route( '/api/fridges')
def fridge():
    return "Something"



@app.route('/login', methods=["POST"])
def login():
    if session.get('uid'):
        print(session.get('uid'))
        return redirect('http://localhost:3000/')
    if request.method == "POST":
        try:
            print(request.form["mail"])
            print(request.form["pass"])
            data = {
                'email': request.form["mail"],
                "password": request.form["pass"],
                "returnSecureToken": "true"
            }
            print(data)
            submit = r.post(config['USER_SIGN_IN'], data=data)
            print(submit)
            if submit.status_code != 200:
                submit = submit.json()
                if submit['error']['message'] == 'INVALID_PASSWORD':
                    err = "The password is wrong"
                elif submit['error']['message'] == 'EMAIL_NOT_FOUND':
                    err = "Email does not exist"
                elif submit['error']['message'] == 'USER_DISABLED':
                    err = "The account associated with this email has been disabled"
                elif submit['error']['message'] == 'INVALID_EMAIL':
                    err = "Please enter a valid email"
                url = "http://localhost:3000/register/login?error="+err
                return redirect(url)
            else:
                session['uid'] = auth.get_user_by_email(
                    submit["email"]).uid
                print(session.get('uid'))
                return redirect('http://localhost:3000/')
        except Exception as e:
            return str(e)
    else:
        return ""


@app.route('/signup', methods=["POST"])
def signup():
    if session.get('uid'):
        return redirect("http://localhost:3000/")
    try:
        auth.create_user(
            email=request.form.get('mail'),
            password=request.form.get('pass'))
    except Exception as e:
        url = "http://localhost:3000/register/sign-up?error="+str(e)
        return  redirect(url)

@app.route('/reset', methods=["POST"])
def reset():
    if request.method == "POST":
        email = request.form.get('email')
        data = {"requestType": "PASSWORD_RESET", "email": email}
        response = r.post(config['OOB_CODE'], data=data)
        if response.status_code == 400:
            if response.json()["error"]["message"] == "EMAIL_NOT_FOUND":
                err = "The email is not found"
                data = jsonify({"err":err})
                return data
        else:
            return redirect('/')
@app.route('/logout', methods=["GET"])
def logout():
    if session.get('uid'):
        session.pop('uid', None)
    return redirect('/login')

@app.route('/currentUser')
def user():
    if session.get('uid'):
        print(auth.get_user(session.get('uid')))
        return " "
    else:
        return None

if __name__ == "__main__":
    app.run(debug=True)
