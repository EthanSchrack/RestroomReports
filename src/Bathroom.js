// export default function Bathroom(n, d, r, i) {
//         const name = n;
//         const description = d;
//         const rating = r;
//         const image = i;

const Bathroom = (props) => {
        
    return (
        <div class="bathroom-element">
            <span>
                <h2>{props.name}</h2>
                <p>{props.description} {props.rating} </p>

                <img src={props.image} width="75px" height="75px"/>
            </span>
        </div>
    );
}

export default Bathroom;