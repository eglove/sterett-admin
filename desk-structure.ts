import { orderableDocumentListDeskItem } from "@sanity/orderable-document-list";
import type {
  ListBuilder,
  StructureBuilder,
  StructureResolver,
  StructureResolverContext,
} from "sanity/desk";

export const deskStructure: StructureResolver = (
  S: StructureBuilder,
  context: StructureResolverContext,
): ListBuilder => {
  return S.list()
    .title("Content")
    .items([
      ...S.documentTypeListItems(),
      orderableDocumentListDeskItem({
        S,
        context,
        title: "Trustees Order",
        type: "trustee",
      }),
      orderableDocumentListDeskItem({
        S,
        context,
        title: "Navigation Order",
        type: "navigation",
      }),
    ]);
};
