import _ from 'lodash'; 

class File {
    constructor(app) {
        this.app = app; 
        this.model = {
            name: null, 
            originalName: null, 
            mimetype: null,
            size: null,
            created: Date.now(), 
        }
    }

    initWithObject(object) {
        this.model.name = _.get(object, 'filename'); // npm install lodash = object.name (no null errors on object)
        this.model.originalName = _.get(object, 'originalname'); 
        this.model.mimetype = _.get(object, 'mimetype'); 
        this.model.size = _.get(object, 'size'); 
        this.model.created = Date.now(); 

        return this;
    }

    toJson() {
        return this.model; 
    }

}

export default File; 