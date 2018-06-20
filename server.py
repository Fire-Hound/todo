from flask import Flask, request, make_response
from flask_restful import Resource, Api
import json
app = Flask(__name__)
api = Api(app)

todos = {}

class TodoSimple(Resource):
    def get(self, todo_id):
        res = api.make_response({todo_id: todos[todo_id]}, 200)
        res.headers.extend({'Access-Control-Allow-Origin': '*'})
        return res

    def put(self, todo_id):
        data = request.get_json()
        todos[todo_id] = data['data']
        return {todo_id: todos[todo_id]}
class All(Resource):
    def get(self):
        return {"data": todos}


api.add_resource(TodoSimple, '/<string:todo_id>')
api.add_resource(All, '/all/')
if __name__ == '__main__':
    app.run(debug=True)