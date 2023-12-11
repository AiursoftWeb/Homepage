import * as React from "react";

/**
 * representing help tag at top right corner
 *
 * normally it would be a dropdownlist, and the actually links are the childern
 */
export class HelpModel {
  id?: number;
  title?: string;
  /// the image on the left
  icon?: React.ReactElement<any, any>;
  /// actually
  children: HelpLinks;
}

export type HelpLinks = HelpLink[];

export class HelpLink {
  /**
   * the link label that displayed
   */
  label?: string;
  /**
   * link
   */
  value?: string;
  content?: string;
  /**
   * the icon that displayed on the left
   */
  icon?: React.ReactElement;
}
