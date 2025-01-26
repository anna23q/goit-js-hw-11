export const fetchPhotosByQuery = searchQuery => {
    const searchParams = new URLSearchParams({
        key: "48425996-443ae7ea34c7b13ee27a488e8",
        q: searchQuery,
        image_type: 'photo',
        orientation: 'horizontal',
        safesearch: true,
    });

    return fetch(`https://pixabay.com/api/?${searchParams.toString()}`)
        .then(response => {
            if (!response.ok) {
                throw new Error(response.status);
            }
            return response.json();
        });
}
