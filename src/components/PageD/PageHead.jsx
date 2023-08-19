import './PageHead.css';
function PageHead(props) {
    return (
        <div className="d-flex justify-content-center p-5">
                <h1>
                    {props.children.split(' ')[0]}
                </h1>
                <h1 className='mx-5'>
                    {props.children.split(' ')[1]}
                </h1>
        </div>
    );
}

export default PageHead;