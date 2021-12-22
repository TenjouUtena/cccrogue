from flask import Flask
from flask_cors import CORS
from debug import *
from json import dumps

app = Flask(__name__)
CORS(app)



@app.route("/Games")
def get_games():
    ## TODO: Not this.
    return dumps(games_list)

@app.route("/Game/<game_id>/Map")
def get_game_map(game_id):
    ## TODO: Not this.
    return dumps(test_map)

@app.route("/Game/<game_id>/Inventory")
def get_game_inventory(game_id):
    ## TODO: Not this.
    return dumps(inventory_list)




@app.route("/")
def hello_world():
    return '"Hello"'