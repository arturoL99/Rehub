import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

const PrivacyPolicy = (props) => {
    return (
        <section className="">
            {documentToReactComponents(props.policy)}
        </section>
    )
};

export default PrivacyPolicy;