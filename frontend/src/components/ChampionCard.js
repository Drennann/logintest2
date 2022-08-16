export default function ChampionCard({data}){

    console.log(data)

    return(
        <div>
            <img alt="champimg" src={data.ImgURL}></img>
            <div>
                <p>Ataque: {data.stats.attackdamage}</p>
                <p>HP: {data.stats.hp}</p>
                <p>Armadura: {data.stats.armor}</p>
            </div>
        </div>
    )
}