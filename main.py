from flask import Flask, render_template, send_from_directory
import os.path
app = Flask(__name__, static_url_path='/static', static_folder='static',template_folder='templates')

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/home/build/<filename>')
def js(filename):
    if os.path.isfile("static/" + filename):
        return send_from_directory('static', filename)
    else:
        os.system(f"curl https://reflect.app/home/build/{filename} > static/{filename}")
        return send_from_directory('static', filename)
    
@app.route('/home/fonts/<path:filename>')
def fonts(filename):
    print(filename)
    if os.path.isfile("static/" + filename):
        return send_from_directory('static', filename)
    else:
        os.system(f"curl https://reflect.app/home/fonts/{filename} > static/{filename}")
        return send_from_directory('static', filename)

if __name__ == '__main__':
    app.run(host="192.168.2.16", port=80, debug=True)
