
const profileEditBotton = document.querySelector('.profile__edit-button');
const popupEdit = document.querySelector('.popup_edit');
const popupAdd = document.querySelector('.popup_add');
const editCloseButton = popupEdit.querySelector('.popup__close-button');
const addCloseButton = popupAdd.querySelector('.popup__close-button');
const profileTitle = document.querySelector('.profile__title');
const profileSubtitle = document.querySelector('.profile__subtitle');
const popupEditTitle = popupEdit.querySelector('.popup__title');
const popupEditSubtitle = popupEdit.querySelector('.popup__subtitle');
const formEditElement = popupEdit.querySelector('.editForm');
const formAddElement = popupAdd.querySelector('.addForm');
const elementsList = document.querySelector('.elements__list');
const profileAddButton = document.querySelector('.profile__add-button');
const popupElement = document.querySelector('.popup-elem');
const popupElementImg = popupElement.querySelector('.popup-elem__img');
const popupElementText = popupElement.querySelector('.popup-elem__text');
const popupElementClose = popupElement.querySelector('.popup-elem__close-btn');
const popupAddTitle = document.querySelector('.popup__title-add');
const popupAddLink = document.querySelector('.popup__link-add');



//                                                                  функция создание карточки

function createCard(cardData) {
  const cardTemplate = document.querySelector('#element-template').content;
  const cardElement = cardTemplate.querySelector('.element').cloneNode('true');
  const elementImage = cardElement.querySelector('.element__image');
  const elementText = cardElement.querySelector('.element__title');
  const elementButtonTrash = cardElement.querySelector('.element__button-trash');
  const elementButtonHeart = cardElement.querySelector('.element__button-heart');
  elementButtonHeart.addEventListener('click', () => {
      event.currentTarget.classList.toggle('element__button-heart_active');
  } );
  elementButtonTrash.addEventListener('click', (evt) => {
      cardElement.remove();
  });
  elementImage.addEventListener('click', () => {
    popupElementImg.setAttribute('src', cardData.link);
    popupElementImg.setAttribute('alt', cardData.name);
    popupElementText.textContent = cardData.name;
    openPopup(popupElement);
  });
  
  elementImage.setAttribute('src', cardData.link);
  elementImage.setAttribute('alt', cardData.name);
  elementText.textContent = cardData.name;
  
  return cardElement;
}


//                                                                  функция добавление карточки

function addCard(cardData, cardContainer) {
  const card = createCard(cardData);
  cardContainer.prepend(card);
}


//                                                                  открытие и закрытие попапа

const openPopup = (popup) => {
    popup.classList.add('popup_opened');
};
const closePopup = (popup) => {
    popup.classList.remove('popup_opened');
};


//                                                                  отправка формы

const popupEditSubmit = (evt) => {
    evt.preventDefault();
    profileTitle.textContent = popupEditTitle.value;
    profileSubtitle.textContent = popupEditSubtitle.value;
    closePopup(popupEdit);
};
const popupAddSubmit = (evt) => {
    evt.preventDefault();
    const fromForm = {
      name: popupAddTitle.value,
      link: popupAddLink.value
    };
    addCard(fromForm, elementsList);
    formAddElement.reset();
    closePopup(popupAdd);
};

//                                                                  слушатели на кнопки

profileEditBotton.addEventListener('click',() => {
    openPopup(popupEdit);
});
editCloseButton.addEventListener('click',() => {
    closePopup(popupEdit);
});
addCloseButton.addEventListener('click',() => {
    closePopup(popupAdd);
});
formEditElement.addEventListener('submit', popupEditSubmit);
formAddElement.addEventListener('submit', popupAddSubmit);
popupElementClose.addEventListener('click', (evt) => {
  closePopup(popupElement);
});



profileAddButton.addEventListener('click',() => {
  openPopup(popupAdd);
});



//                                                                  массив карточек

const initialCards = [
    {
      name: 'Архыз',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
    },
    {
      name: 'Челябинская область',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
    },
    {
      name: 'Иваново',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
    },
    {
      name: 'Камчатка',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
    },
    {
      name: 'Холмогорский район',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
    },
    {
      name: 'Байкал',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
    }
  ]; 

initialCards.forEach(card => {
    addCard(card, elementsList);
  });