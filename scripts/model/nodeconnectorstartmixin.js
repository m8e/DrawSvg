define(["node","connector","constants"],function(a,b,c){var d={tryConnectorStart:function(a){var a=new b({startNode:this,stroke:c.drawnConnectorColor});return a.coords.add({x:this.get("x"),y:this.get("y")}),this.startConnectors.add(a),a}};return d})