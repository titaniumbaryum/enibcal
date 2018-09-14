export class Event{
  begin:Date;
  end:Date;
  title:string;
  location?:string;
  description:string;
  color?:string;
  get id():number{
    return hash(this.title+this.location+this.begin.getTime());
  }
  constructor({begin,end,title,location,description,color=undefined}){
    this.begin=begin;
    this.end=end;
    this.title=title;
    this.location=location;
    this.description=description;
    this.color=color;
  }
}
function hash(s){
  return s.split("").reduce(function(a,b){a=((a<<5)-a)+b.charCodeAt(0);return a&a},0);
}
