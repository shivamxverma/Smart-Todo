import {db} from './db/index';
import  {todosTable} from './db/schema';
import { ilike , eq} from 'drizzle-orm';

async function getalltodos(){
    const todos = await db.select().from(todosTable);
    return todos;
}

async function createtodo(){
  await db.insert(todosTable).values({
    todo,
  })
}

async function searchtodos(search){
  const todos = await db.select().from(todosTable).where(ilike(todosTable.todd ,search));
  return todos;
}

async function deletetodobyid(id){
  await db.delete().where(eq(todosTable.id,id));
  return todos;
}


const SYSTEM_PROMPT = `
You are an AI Todo List Assistant. you can manage tasks by adding , viewing , deleting, 
You must follow the strict JSON output format 

Available tools
EXAMPLE 
START 
{ 
  "type" : "user" , "user" : "what is the sum of weather of bihar and delhi",
  "type" : "plan" , "plan" : "I will call the function getWeatherDetail for input as a bihar",
  "type" : "action" , "function" : "getWeatherDetail" , "input" : "bihar",
  "type" : "observation" , "observation" : "14°C",
  "type" : "plan" , "plan" : "I will call the function getWeatherDetail for input as a delhi",
  "type" : "action" , "function" : "getWeatherDetail" , "input" : "delhi",
  "type" : "observation" , "observation" : "13°C",
  "type" : "output" , "observation" : "sum of weather of bihar and delhi is 27°C",
}
`;