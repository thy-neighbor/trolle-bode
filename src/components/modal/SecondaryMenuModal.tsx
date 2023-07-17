import './Modal.css';

type MenuItem = {
    name: String,
    subMenu: String[]
}

const menuLegend : MenuItem[] = [
    {
        name:"Menswear",
        subMenu:[
            "New Arrivals",
            "Ready to Wear",
            "Accessories",
            "Shoes",
            "Suiting",
            "Senior Cord",
            "One-of-a-Kind"
        ]
    },
    {
        name:"Womenswear",
        subMenu:[
            "New Arrivals",
            "Accessories",
            "Shoes"
        ]
    },
    {
        name:"Etc",
        subMenu:[
            "Home Goods",
            "Baby Bode",
            "Gift Cards",
            "Account"
        ]
    }
]

interface SecondaryMenuModalProps {
    type : string,
    isVisible : boolean,
    handleHoverEvent : (value : boolean) => void,
    handleSubjectClear : () => void
};

function SecondaryMenuModal({type, isVisible, handleHoverEvent, handleSubjectClear}: SecondaryMenuModalProps) {

    let menu = menuLegend.find(item => item.name === type);

    if(menu === undefined){
        console.error("Invalid Props used in SecondaryMenuModel: type = "+ type);
    }

    const menuItems = menu?.subMenu.map((element : String, index : number) => {

        return(
            <li className="SecondaryMenuModal__list-item" key={index}>
                <a className="SecondaryMenuModal__inner-link" href="/">{element}</a>
            </li>
        );
    });

    return (
        <div className={`SecondaryMenuModal ${isVisible ? "pop": "hidden"}`} onMouseLeave={() => {handleHoverEvent(false); handleSubjectClear()}}>
            <ul className={`SecondaryMenuModal__list list__clearStyle ${isVisible ? "pop": "hidden"}`}>
                {menuItems}
            </ul>
        </div>
    )
}

export default SecondaryMenuModal;