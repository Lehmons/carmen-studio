import S from "@sanity/desk-tool/structure-builder";
import { orderableDocumentListDeskItem } from "@sanity/orderable-document-list";
import ProjectPreview from "../components/previews/project/ProjectPreview";

export const getDefaultDocumentNode = ({ schemaType }) => {
  // Conditionally return a different configuration based on the schema type
  // if the schema is a project then return the project preview component
  if (schemaType === "project") {
    return S.document().views([
      S.view.form(),
      S.view.component(ProjectPreview).title("Preview"),
    ]);
  }

  return S.document().views([S.view.form()]);
};

export default S.list()
  .title("Content")
  .items([
    // Optional configuration
    orderableDocumentListDeskItem({
      type: "project",
      title: "Project Order",
    }),
    ...S.documentTypeListItems(),
  ]);
