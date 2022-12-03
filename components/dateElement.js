export const dateElement = (date) =>{
    const datelement = document.createElement("li");
    datelement.classList.add("date"); //date de styles.css
    datelement.innerHTML = date;
    return datelement;
}