define(["backbone","connector"],function(a,b){var c=a.Collection.extend({model:b,destroyAll:function(){while(this.length>0)this.at(0).destroy()}});return c})