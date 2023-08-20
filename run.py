from app import create_app


app = create_app()

if __name__ == "__main__":
    app.run(debug=True)

def list_routes(app):
    """
    Function to list all registered routes in a Flask app.
    """
    output = []
    for rule in app.url_map.iter_rules():
        methods = ','.join(rule.methods)
        line = f"{rule.endpoint} : {methods} : {rule}"
        output.append(line)
    return output

# Call the function to list routes and print them
routes = list_routes(app)
for route in routes:
    print(route)
