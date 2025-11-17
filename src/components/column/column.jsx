import { cardList } from "../../data"
import { MainColumn,
         ColumnTitle,
         ColumnTitleP,
         CardItem,
         CardsCard,
         CardGroup,
         CardBtn,
         CardBtnDiv,
         CardContent,
         CardTitle,
         CardDate,

 } from "./column.styled"

export const Column = ({ name, cards=[] }) => {
    const className = {"Web Design" : "_orange",
        "Research" : "_green",
        "Copywriting" : "_purple",            
};   
    
    
    return (
        <MainColumn><ColumnTitle><ColumnTitleP><p>{name}</p></ColumnTitleP></ColumnTitle>
        {cards = cardList.map((item) => (
            <CardItem>
                <CardsCard>
                    <CardGroup>
                    <div className={`card__theme ${className[item.topic]}`}>
                <p className={`${className[item.topic]}`}>{item.topic}</p>
                </div>
                    <a href="#popBrowse" target="_self">
                        <CardBtn>
                        <CardBtnDiv></CardBtnDiv>
                        <CardBtnDiv></CardBtnDiv>
                        <CardBtnDiv></CardBtnDiv>
                        </CardBtn>
                     </a>
                    </CardGroup>
                 <CardContent>
                     <a href="" target="_blank">
                        <CardTitle>{item.title}</CardTitle>
                     </a>
                     <CardDate>
                     <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 13 13" fill="none">
                             <g clip-path="url(#clip0_1_415)">
                                 <path d="M10.5625 2.03125H2.4375C1.7644 2.03125 1.21875 2.5769 1.21875 3.25V10.5625C1.21875 11.2356 1.7644 11.7812 2.4375 11.7812H10.5625C11.2356 11.7812 11.7812 11.2356 11.7812 10.5625V3.25C11.7812 2.5769 11.2356 2.03125 10.5625 2.03125Z" stroke="#94A6BE" stroke-width="0.8" stroke-linejoin="round" />
                                 <path d="M11.7812 4.0625H1.21875M3.25 1.21875V2.03125V1.21875ZM9.75 1.21875V2.03125V1.21875Z" stroke="#94A6BE" stroke-width="0.8" stroke-linecap="round" stroke-linejoin="round" />
                             </g>
                             <defs>
                                 <clipPath id="clip0_1_415">
                                     <rect width="13" height="13" fill="white" />
                                 </clipPath>
                             </defs>
                        </svg>
                        <p>{item.date}</p>
                     </CardDate>
                     
                </CardContent>
                </CardsCard>
               
            </CardItem>
            ))}</MainColumn>
       
    )
}