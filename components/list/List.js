import Item from "../item/Item";

export default function List({txt}) {
   const item = txt.map(items=><Item text ={items} />)
    return(
        <>
        <ul>
            {item}
        </ul>
        </>
    )
}