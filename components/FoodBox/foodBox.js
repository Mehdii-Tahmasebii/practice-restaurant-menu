

let template = document.createElement('template');
template.innerHTML = `

<link rel="stylesheet" href="./components/FoodBox/foodBox.css" />
<div class="productbox">
        <div class="img-wrapper">
         <slot class="product-image" name="product-image"></slot>
        </div>
        <div class="info">
          <div class="food-heading">
            <slot name="product-name" class="">buttermilk pancakes</slot>
            <slot name="product-price" class="price">$15.99</slot>
          </div>
          <p class="descriptions">
           Lorem ipsum dolor sit, amet consectetur adipisicing elit. Similique, iusto. Adipisci libero sed nam molestiae ipsum a rem eligendi, provident quas, doloribus officiis. Cum soluta beatae odio tenetur fugiat ipsam tgshnnnnnnnnnnnnnnnnnynsrtynyntn
          </p>
        </div>
      </div>`;

      class ProductBox extends HTMLElement {
        constructor(){
            super()

            this.attachShadow({mode:'open'});
            this.shadowRoot.appendChild(template.content.cloneNode(true));

        }
      }


      export default ProductBox;

