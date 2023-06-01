import React from "react";
import hotelImg from "../images/hotel-placeholder.png";
import paymentImg from "../images/hotel4.webp";
const Payment = () => {
  return (
    <>
      <div class="min-h-screen p-6 bg-gray-100 flex m-3">
        <div class="container max-w-screen-lg mx-auto w-full ">
          <div>
            <div class="bg-white rounded shadow-lg p-4 px-4 md:p-8 mb-6">
              <div class="grid gap-40 gap-y-2 text-sm lg:grid-cols-2">
                <div class="">
                  <div class="grid gap-4 gap-y-2 text-sm grid-cols-1 md:grid-cols-5 p-5">
                    <div class="md:col-span-5 mb-5">
                      <label for="">Full Name</label>
                      <input
                        type="text"
                        name="full_name"
                        id="full_name"
                        class="h-10 border border-gray mt-1 rounded px-4 w-full bg-gray-50"
                        value=""
                      />
                    </div>

                    <div class="md:col-span-5 mb-5">
                      <label for="email">Email Address</label>
                      <input
                        type="text"
                        name="email"
                        id="email"
                        class="h-10 border border-gray  mt-1 rounded px-4 w-full bg-gray-50"
                        value=""
                        placeholder="email@domain.com"
                      />
                    </div>
                    <div class="md:col-span-5 mb-5">
                      <label for="phon_number">Phone Number</label>
                      <input
                        type="text"
                        name="phon_number"
                        id="phon_number"
                        class="h-10 border border-gray mt-1 rounded px-4 w-full bg-gray-50"
                        value=""
                      />
                    </div>
                    <div class="md:col-span-3 mb-5">
                      <label for="address">Address / Street</label>
                      <input
                        type="text"
                        name="address"
                        id="address"
                        class="h-10 border border-gray mt-1 rounded px-4 w-full bg-gray-50"
                        value=""
                        placeholder=""
                      />
                    </div>

                    <div class="md:col-span-2 mb-5">
                      <label for="city">City</label>
                      <input
                        type="text"
                        name="city"
                        id="city"
                        class="h-10 border border-gray mt-1 rounded px-4 w-full bg-gray-50"
                        value=""
                        placeholder=""
                      />
                    </div>

                    <div class="md:col-span-2 mb-5">
                      <label for="country">Country / region</label>
                      <div class="h-10 bg-gray-50 flex border border-gray rounded items-center mt-1">
                        <input
                          name="country"
                          id="country"
                          placeholder="Country"
                          class="px-4 appearance-none outline-none text-gray-800 w-full bg-transparent"
                          value=""
                        />
                        <button
                          tabindex="-1"
                          class="cursor-pointer outline-none focus:outline-none transition-all text-gray-300 hover:text-red-600"
                        >
                          <svg
                            class="w-4 h-4 mx-2 fill-current"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          >
                            <line x1="18" y1="6" x2="6" y2="18"></line>
                            <line x1="6" y1="6" x2="18" y2="18"></line>
                          </svg>
                        </button>
                        <button
                          tabindex="-1"
                          for="show_more"
                          class="text-black cursor-pointer outline-none focus:outline-none border-l  border-gray transition-all text-gray-300 hover:text-blue-600"
                        >
                          <svg
                            class="w-4 h-4 mx-2 fill-current"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          >
                            <polyline points="18 15 12 9 6 15"></polyline>
                          </svg>
                        </button>
                      </div>
                    </div>

                    <div class="md:col-span-2 mb-5">
                      <label for="state">State / province</label>
                      <div class="h-10 bg-gray-50 flex border border-gray rounded items-center mt-1">
                        <input
                          name="state"
                          id="state"
                          placeholder="State"
                          class="px-4 appearance-none outline-none text-gray-800 w-full bg-transparent"
                          value=""
                        />
                        <button
                          tabindex="-1"
                          class="cursor-pointer outline-none focus:outline-none transition-all text-gray-300 hover:text-red-600"
                        >
                          <svg
                            class="w-4 h-4 mx-2 fill-current"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          >
                            <line x1="18" y1="6" x2="6" y2="18"></line>
                            <line x1="6" y1="6" x2="18" y2="18"></line>
                          </svg>
                        </button>
                        <button
                          tabindex="-1"
                          for="show_more"
                          class="cursor-pointer outline-none focus:outline-none border-l border-gray transition-all text-gray-300 hover:text-blue-600"
                        >
                          <svg
                            class="w-4 h-4 mx-2 fill-current"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          >
                            <polyline points="18 15 12 9 6 15"></polyline>
                          </svg>
                        </button>
                      </div>
                    </div>

                    <div class="md:col-span-1 mb-5">
                      <label for="zipcode">Zipcode</label>
                      <input
                        type="text"
                        name="zipcode"
                        id="zipcode"
                        class="transition-all flex items-center h-10 border border-gray mt-1 rounded px-4 w-full bg-gray-50"
                        placeholder=""
                        value=""
                      />
                    </div>

                    <div class="md:col-span-5 text-left mt-5">
                      <div class="inline-flex items-start mt-5">
                        <button
                          type="button"
                          className="flex items-end inline-block px-7 py-3 border-2 border-hazel text-black font-medium text-sm leading-snug uppercase
                            rounded-lg hover:bg-hazel hover:text-white focus:outline-none focus:ring-0 transition duration-150 ease-in-out"
                          data-mdb-ripple="true"
                          data-mdb-ripple-color="light"
                        >
                          Continue to checkout{" "}
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  class="grid gap-40 gap-y-2 text-sm  rounded rounded shadow-xl text-white"
                  style={{
                    backgroundImage: `url(${paymentImg})`,
                    backgroundPosition: "50%",
                    backgroundRepeat: "no-repeat",
                  }}
                >
                  <div className=" bg-opacity-80 bg-black p-5">
                    <div class="md:col-span-5 p-5">
                      <h1>Order Summary</h1>
                    </div>

                    <div class="md:col-span-3 w-full">
                      <img src={hotelImg} alt="hotel placeholder image"></img>
                    </div>

                    <div class="md:col-span-5">
                      <table className="border-separate border-transparent p-4">
                        <tr>
                          <td>room type : </td>
                          <td></td>
                        </tr>
                        <tr>
                          <td>No. of nights: </td>
                          <td></td>
                        </tr>
                        <tr>
                          <td>Guests : </td>
                          <td></td>
                        </tr>
                        <tr>
                          <td>Dates :</td>
                          <td></td>
                        </tr>
                      </table>
                    </div>

                    <div class="md:col-span-3 p-3 ">
                      <hr />
                    </div>

                    <div class="md:col-span-5">
                      <table className="border-separate border-transparent p-4">
                        <tr>
                          <td>Subtotal : </td>
                          <td></td>
                        </tr>
                        <tr>
                          <td>Tax: </td>
                          <td></td>
                        </tr>
                      </table>
                    </div>
                    <div class="md:col-span-3 p-3">
                      <hr />
                    </div>

                    <div class="md:col-span-5 text-right">
                      <table className="border-separate border-transparent p-4">
                        <tr>
                          <td>Total : </td>
                          <td></td>
                        </tr>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Payment;
