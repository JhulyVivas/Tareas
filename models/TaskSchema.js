const { Schema, model }= require ('mongoose')

const TaskSchema = Schema({
    title: {
        type: String,
        required: true
    },
    user: {
        type: Schema.Types.ObjectId,
        ref:'Usuario'
    },
},{
    toJSON:{
        virtuals: true
    },
    toObject: {
        virtuals: true
    }
});

TaskSchema.method('toJSON', function() {
    const { __v, _id, ...object} = this.toObject();
    object.id = _id;
    return object;
})
module.exports = model('Task', TaskSchema);