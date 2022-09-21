export default function EmbedUrl(props) {
    let logo = props.logo;

    if (!logo) {
        logo = 'https://logo.clearbit.com/' + props.url.replace('http://','').replace('https://','').split(/[/?#]/)[0];
    }

    return (
        <div className='w-full'>
            <img className="inline p-2" height="50" width="50" src={logo} /><a className="inline" href={props.url}>{props.title}</a>
        </div>
    )
}