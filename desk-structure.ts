import type {
  ListBuilder,
  StructureBuilder,
  StructureResolver,
  StructureResolverContext,
} from "sanity/desk";

import { orderableDocumentListDeskItem } from "@sanity/orderable-document-list";

export const deskStructure: StructureResolver = (
  S: StructureBuilder,
  context: StructureResolverContext,
): ListBuilder => {
  return S.list()
    .title("Content")
    .items([
      ...S.documentTypeListItems(),
      orderableDocumentListDeskItem({
        context,
        S,
        title: "Trustees Order",
        type: "trustee",
      }),
      orderableDocumentListDeskItem({
        context,
        S,
        title: "Navigation Order",
        type: "navigation",
      }),
    ]);
};
