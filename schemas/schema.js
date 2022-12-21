// First, we must import the schema creator
import createSchema from "part:@sanity/base/schema-creator";

// Then import schema types from any plugins that might expose them
import schemaTypes from "all:part:@sanity/base/schema-type";

//blocks
import Editorial from "./blocks/editorial";
import Simple from "./blocks/simple";

//documents
import Home from "./documents/home";
import About from "./documents/about";
import Project from "./documents/project";
import Footer from "./documents/footer";

//objects
import TextBlock from "./objects/textBlock";
import ProjectText from "./objects/projectText";
import FooterLink from "./objects/footerLink";
import ImageBlock from "./objects/imageBlock";
import ImageGrid from "./objects/imageGrid";
import LinkedPage from "./objects/linkedPage";
import SingleImage from "./objects/singleImage";
import TwoColumnTextBlock from "./objects/twoColumnTextBlock";
import ColumnTextBlock from "./objects/columnTextBlock";

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: "default",
  // Then proceed to concatenate our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    /* Your types here! */
    Home,
    About,
    Project,
    Footer,
    FooterLink,
    TextBlock,
    TwoColumnTextBlock,
    ImageBlock,
    ImageGrid,
    LinkedPage,
    Editorial,
    SingleImage,
    Simple,
    ProjectText,
    ColumnTextBlock,
  ]),
});
