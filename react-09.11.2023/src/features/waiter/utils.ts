export const hasSubstring = (str: string, subStr: string | null | undefined): boolean =>( str || "").toLowerCase().includes((subStr || "").toLowerCase());