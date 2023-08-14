export const ListItems = (props: any): any => {
    console.log(props); //props.listItems = ['hello', 'something']
    return (
        <div>
            {props.listItems.map(
                (listItem: any, index: number) => (
                <div 
                    key={index} 
                    onClick={() => props.deleteListItem(listItem)}>{listItem}
                </div>)
            )}
        </div>
    )
}