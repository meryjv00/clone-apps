import React, { useState, useEffect } from 'react'
import TinderCard from 'react-tinder-card'
import database from './firebase'
import './TinderCards.css'

function TinderCards() {
    const [people, setPeople] = useState([
/*         
        {
            name: "Jeniffer Lopez",
            url: "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/jennifer-lopez-is-seen-on-the-set-of-un-nuevo-dia-at-news-photo-1576181530.jpg?crop=0.614xw:0.400xh;0.199xw,0.0421xh&resize=640:*"
        },
*/
    ]);
    const unsubscribe = useEffect(() => {
        database.collection("people").onSnapshot(snapshot => (
            setPeople(snapshot.docs.map(doc => doc.data()))
        ));

        return () => {
            unsubscribe();
        }

    }, []);

    return (
        <div>
            <div className="tinder_cards_cardContainer">
                {people.map((person) => (
                    <TinderCard
                        className="swipe"
                        key={person.name}
                        preventSwipe={['up', 'down']}
                    >
                        <div
                            style={{ backgroundImage: `url(${person.url})` }}
                            className="card"
                        >
                            <h3>{person.name}</h3>
                        </div>
                    </TinderCard>
                ))}
            </div>

        </div>
    )
}

export default TinderCards
