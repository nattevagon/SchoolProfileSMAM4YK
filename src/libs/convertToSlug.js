const convertToSlug = (text) => {
    return text
        .toLowerCase()          // Convert to lowercase
        .replace(/\s+/g, "-")   // Replace spaces with hyphens
        .replace(/[^\w-]+/g, "") // Remove all non-word characters
        .replace(/--+/g, "-")   // Replace multiple hyphens with a single hyphen
        .replace(/^-+/, "")     // Trim hyphens from the start of the string
        .replace(/-+$/, "");    // Trim hyphens from the end of the string
}

export { convertToSlug }
