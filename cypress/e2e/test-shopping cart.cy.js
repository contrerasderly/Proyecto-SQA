//Seleccionar dos productos de la categoría amor

describe("Add to cart", () => {
  it("Agregar productos categoria amor", () => {
    cy.visit("https://www.floristeriamundoflor.com/");
    cy.wait(1000);
    cy.get("#menu-item-2806 > a").click({ force: true });
    cy.wait(2000);
    cy.get(
      ".post-4078 > .product-block > .block-inner > .image > .product-image > .image-no-effect"
    ).click({ force: true });
    cy.get(".single_add_to_cart_button").click();
    cy.wait(2000);
    cy.go(-2);
    cy.get(
      ".post-4082 > .product-block > .block-inner > .image > .product-image > .image-no-effect"
    ).click({ force: true });
    cy.get(".single_add_to_cart_button").click();
    cy.log("Se han agregado dos productos al carrito correctamente");
  });
});

//Agregar y eliminar producto de la categoría cumpleaños

describe("Add and delete to cart", () => {
  it("Agregar productos categoria cumpleaños", () => {
    cy.visit("https://www.floristeriamundoflor.com/");
    cy.wait(1000);
    cy.get("#menu-item-2799 > a").click({ force: true });
    cy.wait(2000);
    cy.get(
      ".post-4071 > .product-block > .block-inner > .image > .product-image > .image-no-effect"
    ).click({ force: true });
    cy.get(".single_add_to_cart_button").click();
    cy.wait(2000);
    cy.get(".remove > .fa").click();
    cy.log("El producto se ha eliminado del carrito correctamente");
    //cy.get()
  });
});
