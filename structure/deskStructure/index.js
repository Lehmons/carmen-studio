import S from "@sanity/desk-tool/structure-builder";
import { orderableDocumentListDeskItem } from "@sanity/orderable-document-list";

export const getDefaultDocumentNode = ({ schemaType }) => {
  // Conditionally return a different configuration based on the schema tye
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
