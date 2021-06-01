import sanityClient from "@sanity/client";

export default sanityClient({
    projectId: "hu52e1wc",
    dataset: "production",
    useCdn: true,
});