interface Pros{
    color:String;
  
}
export default function LigneProgressive({color}:Pros) {
    return (
        <div className={`rounded-xl h-2 w-full ${color}`}></div>
    )
}