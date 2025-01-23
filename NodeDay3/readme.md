https://chatgpt.com/share/67921dc4-f18c-8011-ae7f-7644d78a7a8c

first quuestion is to asked the user is what is data?


Moon Modeler
App Eraser 
//schmea create the model structure 
//moedel have two parms model name in db and schema of that model

Steps to create model 
create a file name modelname.model.js
1) npm i mongoose
2) import mongoose from 'mongoose'
3) const userSchema  = new mongoose.Schema({  })
4) export const User = mongoose.model('User',userSchema)

in database the User will saved as users all words in small and as plural form 


model defining 

simple way 
mongoose.schema({
fieldName:dataFieldType
})


with validation way 
https://mongoosejs.com/docs/validation.html
mongoose.schema({
fieldName: {
type: FieldDataType
...
...
...
}
})


https://mongoosejs.com/docs/timestamps.html


after creating model we need to add timestamps for that thing just add these lines with your schmea
{ timestamps: true }
timestamps: { createdAt: true, updatedAt: false }
const userSchema = new Schema({ name: String }, { timestamps: true });
mongoose.schema({
fieldName: {
type: FieldDataType
...
...
...
}
},timestamps: { createdAt: true, updatedAt: false })

Suppose we have 3 modesl

Users 
Todo 
SubTodos

lets define user 


const usersSchema = new mongoose.Schema({
  email:{
     type :String,
     unique : true,
      required : true
},
 username:{
     type :String,
     unique : true,
     required : [true,'must be true' ]
}
},{timeStamps:true})

export const User = mongose.model('User',usersSchema);


const TodoSchema = new mongoose.Schema({

  createdBy:{
     type :mongose.Schema.Types.ObjectId,
    ref:"User",
      required: true
},
 isCompleted:{
     type :boolean,
 default:false,
},
 subTodos:{[
     type :mongoose.Schema.types.ObjectId,
ref:'SubTodo'
]

},
},{timeStamps: true})

export const Todo = mongose.model('Todo',TodoSchema);


const subTodoSchema = new mongoose.Schema({

  content: {
     type :String

      required: true
},

})

export const subTodo = mongose.model('subTodo',subTodoSchema);

The main thing we learn in above docuemnts is how to linked two schmeas with eachother 
Type:mongoose.Schema.Types.ObjectId,
ref :"ModelName" 

its must be same with the name that is in String form example 


export const UserA = mongose.model('UserB',usersSchema);

Same as UserB 

Type:mongoose.Schema.Types.ObjectId,
ref :"UserB" 








if i save this as 

export const SubTodo = mongoose.model('subtodos', subTodoSchema);

subtodos will this add a new s and make it subtodoss or not 

answer not it will save the subtodos as it is mongodb has their own inteligence which cill check it automaticly  that we need to add s or not 
excample 
category -> categories
categories -> categories 

how to upload imgs in db 

we can upload them directly to db as bufferFoam(which is jpg pdf etc) or we save it to the our pc and make a public url to show this img and save that url to db 

or we use aws ec2 bucket or cloudniary for saving our media content by saving their url to our db 
