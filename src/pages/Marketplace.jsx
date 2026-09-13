import React, { useMemo, useState } from 'react';
import DashboardLayout from '../components/layout/DashboardLayout';
import Card from '../components/common/Card';
import Button from '../components/common/Button';
import { MOCK_PRODUCTS } from '../utils/constants';

import {
  ShoppingBag,
  Search,
  ShoppingCart,
  Heart,
  Star,
  Filter,
  TrendingUp,
  Leaf,
  Award,
  Package,
  ArrowRight,
  Sparkles,
  ShieldCheck,
  Truck,
  Store,
} from 'lucide-react';


export const Marketplace = () => {

  const [searchTerm, setSearchTerm] = useState('');
  const [categoryFilter, setCategoryFilter] = useState('All');

  const [cart, setCart] = useState([]);
  const [wishlist, setWishlist] = useState([]);


  const categories = [
    "All",
    "Fertilizer",
    "Raw Materials",
    "Organic",
    "Compost",
    "Plastic",
    "Metal",
    "Paper"
  ];


  const stats = [
    {
      title:"Products",
      value:"520+",
      icon:<Package className="w-6 h-6 text-emerald-400"/>
    },
    {
      title:"Certified Sellers",
      value:"120+",
      icon:<Store className="w-6 h-6 text-cyan-400"/>
    },
    {
      title:"Orders Delivered",
      value:"8420+",
      icon:<Truck className="w-6 h-6 text-indigo-400"/>
    },
    {
      title:"Customer Rating",
      value:"4.9 ★",
      icon:<Award className="w-6 h-6 text-amber-400"/>
    }
  ];


  const filteredProducts = useMemo(()=>{

    return MOCK_PRODUCTS.filter((product)=>{

      const searchMatch =
        product.name
        .toLowerCase()
        .includes(searchTerm.toLowerCase());


      const categoryMatch =
        categoryFilter==="All" ||
        product.category===categoryFilter;


      return searchMatch && categoryMatch;

    });

  },[searchTerm,categoryFilter]);



  const addToCart=(product)=>{

    setCart((prev)=>[
      ...prev,
      product
    ]);

  };


  const toggleWishlist=(id)=>{

    if(wishlist.includes(id)){

      setWishlist(
        wishlist.filter(
          item=>item!==id
        )
      );

    }
    else{

      setWishlist([
        ...wishlist,
        id
      ]);

    }

  };



  return (

    <DashboardLayout
      title="RENOVA-AI Circular Marketplace"
      subtitle="Buy and sell sustainable resources through an AI powered circular economy network"
    >


      {/* HERO SECTION */}

      <section className="relative rounded-3xl overflow-hidden border border-slate-800 bg-gradient-to-r from-slate-900 via-slate-900 to-emerald-950/40 p-10 mb-8">


        <div className="absolute right-0 top-0 w-96 h-96 bg-emerald-500/10 blur-3xl rounded-full"/>


        <div className="relative flex flex-col xl:flex-row justify-between gap-10">


          <div className="max-w-3xl">


            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-bold mb-6">

              <Sparkles className="w-4 h-4"/>

              AI Sustainable Marketplace

            </div>



            <h1 className="text-5xl font-black leading-tight mb-6">

              Transform Waste Into

              <span className="text-gradient">

                {" "} Valuable Resources

              </span>

            </h1>



            <p className="text-slate-400 text-lg leading-8">

              Connect farmers, hotels, restaurants,
              recycling industries and vendors.
              Buy certified compost, fertilizer and
              recycled materials from verified sellers.

            </p>



            <div className="flex flex-wrap gap-4 mt-8">


              <Button size="lg">

                <ShoppingBag className="w-5 h-5"/>

                Explore Products

              </Button>


              <Button
                size="lg"
                variant="secondary"
              >

                Become Seller

                <ArrowRight className="w-5 h-5"/>

              </Button>


            </div>


          </div>


          <div className="grid grid-cols-2 gap-4">


            {stats.map((item,index)=>(

              <Card key={index}>

                <div className="mb-4">

                  {item.icon}

                </div>


                <h2 className="text-3xl font-black">

                  {item.value}

                </h2>


                <p className="text-sm text-slate-400 mt-2">

                  {item.title}

                </p>


              </Card>

            ))}


          </div>


        </div>


      </section>
            {/* SEARCH AND FILTER SECTION */}

      <Card className="mb-8">


        <div className="flex flex-col lg:flex-row gap-5">


          {/* SEARCH BAR */}

          <div className="relative flex-1">


            <Search
              className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 w-5 h-5"
            />


            <input

              type="text"

              value={searchTerm}

              onChange={(e)=>setSearchTerm(e.target.value)}

              placeholder="Search compost, fertilizer, recycled materials..."

              className="w-full pl-12 pr-4 py-3 rounded-xl glass-input"

            />


          </div>



          {/* CATEGORY DROPDOWN */}


          <select

            value={categoryFilter}

            onChange={(e)=>setCategoryFilter(e.target.value)}

            className="px-5 py-3 rounded-xl glass-input bg-slate-900"

          >


            {categories.map((category)=>(

              <option
                key={category}
                value={category}
              >

                {category}

              </option>

            ))}


          </select>



          <Button variant="secondary">

            <Filter className="w-5 h-5"/>

            Filter

          </Button>


        </div>


      </Card>





      {/* CATEGORY BUTTONS */}


      <div className="flex flex-wrap gap-3 mb-8">


        {categories.map((category)=>(


          <button

            key={category}

            onClick={()=>setCategoryFilter(category)}

            className={`px-5 py-2 rounded-full border text-sm font-semibold transition ${
              
              categoryFilter===category

              ? "bg-emerald-500 text-slate-950 border-emerald-500"

              : "border-slate-700 text-slate-300 hover:border-emerald-400 hover:text-emerald-400"

            }`}

          >

            {category}


          </button>


        ))}


      </div>





      {/* MARKETPLACE SUMMARY */}


      <div className="grid md:grid-cols-4 gap-6 mb-10">



        <Card>


          <div className="flex justify-between items-center">


            <div>


              <p className="text-sm text-slate-400">

                Products Found

              </p>


              <h2 className="text-3xl font-black mt-2">

                {filteredProducts.length}

              </h2>


            </div>


            <Search className="w-10 h-10 text-emerald-400"/>


          </div>


        </Card>





        <Card>


          <div className="flex justify-between items-center">


            <div>


              <p className="text-sm text-slate-400">

                Cart Items

              </p>


              <h2 className="text-3xl font-black mt-2">

                {cart.length}

              </h2>


            </div>


            <ShoppingCart className="w-10 h-10 text-cyan-400"/>


          </div>


        </Card>





        <Card>


          <div className="flex justify-between items-center">


            <div>


              <p className="text-sm text-slate-400">

                Wishlist

              </p>


              <h2 className="text-3xl font-black mt-2">

                {wishlist.length}

              </h2>


            </div>


            <Heart className="w-10 h-10 text-pink-400"/>


          </div>


        </Card>





        <Card>


          <div className="flex justify-between items-center">


            <div>


              <p className="text-sm text-slate-400">

                Verified Sellers

              </p>


              <h2 className="text-3xl font-black mt-2">

                120+

              </h2>


            </div>


            <ShieldCheck className="w-10 h-10 text-emerald-400"/>


          </div>


        </Card>



      </div>





      {/* PRODUCT HEADER */}


      <div className="flex flex-col md:flex-row justify-between gap-4 mb-8">


        <div>


          <h2 className="text-3xl font-black">

            Marketplace Products

          </h2>


          <p className="text-slate-400 mt-2">

            Verified sustainable products from circular economy partners.

          </p>


        </div>



        <div className="flex items-center gap-2 text-emerald-400 font-semibold text-sm">


          <Leaf className="w-5 h-5"/>


          Sustainable Trading Network


        </div>



      </div>




      {/* PRODUCT GRID START */}


     <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
            {filteredProducts.map((product)=>(


        <Card
          key={product.id}
          className="group relative overflow-hidden"
        >


          {/* WISHLIST BUTTON */}

          <button

            onClick={()=>toggleWishlist(product.id)}

            className="absolute top-4 right-4 z-10 p-2 rounded-full bg-slate-950/80 border border-slate-700"

          >

            <Heart

              className={`w-5 h-5 transition ${
                wishlist.includes(product.id)

                ? "text-pink-500 fill-pink-500"

                : "text-slate-400"

              }`}

            />

          </button>





          {/* IMAGE */}


          <div className="relative h-56 rounded-xl overflow-hidden mb-5">


            <img

              src={product.image}

              alt={product.name}

              className="w-full h-full object-cover group-hover:scale-110 transition duration-700"

            />


            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-transparent"/>



            <span className="absolute top-3 left-3 px-3 py-1 rounded-full bg-emerald-500 text-slate-950 text-xs font-bold">

              {product.type}

            </span>



            <span className="absolute bottom-3 left-3 px-3 py-1 rounded-full bg-slate-950/90 border border-emerald-500/30 text-emerald-400 text-xs flex items-center gap-1">

              <ShieldCheck className="w-3 h-3"/>

              Verified Product

            </span>


          </div>





          {/* PRODUCT DETAILS */}


          <div className="space-y-4">



            <div>


              <h3 className="text-xl font-bold text-slate-100 group-hover:text-emerald-400 transition">

                {product.name}

              </h3>


              <p className="text-sm text-slate-400 mt-2">

                Supplier: {product.seller}

              </p>


            </div>





            {/* RATING */}


            <div className="flex justify-between items-center">


              <div className="flex items-center gap-1">


                <Star className="w-4 h-4 text-amber-400 fill-amber-400"/>


                <span className="font-semibold">

                  {product.rating}

                </span>


              </div>



              <span className="text-xs text-emerald-400 font-semibold">

                Eco Score 98%

              </span>


            </div>





            {/* STOCK */}


            <div>


              <div className="flex justify-between text-sm mb-2">


                <span className="text-slate-400">

                  Available Stock

                </span>


                <span className="font-semibold">

                  {product.stockKg} kg

                </span>


              </div>



              <div className="h-2 rounded-full bg-slate-800 overflow-hidden">


                <div

                  className="h-full bg-gradient-to-r from-emerald-500 to-cyan-500"

                  style={{

                    width:`${Math.min(

                      (product.stockKg/1000)*100,

                      100

                    )}%`

                  }}

                />


              </div>


            </div>





            {/* EXTRA INFO */}


            <div className="grid grid-cols-2 gap-3">


              <div className="p-3 rounded-xl bg-slate-900 border border-slate-800">


                <p className="text-xs text-slate-500">

                  Delivery

                </p>


                <p className="font-semibold text-sm mt-1">

                  1-2 Days

                </p>


              </div>




              <div className="p-3 rounded-xl bg-slate-900 border border-slate-800">


                <p className="text-xs text-slate-500">

                  Carbon Saved

                </p>


                <p className="font-semibold text-sm mt-1 text-emerald-400">

                  28 kg CO₂

                </p>


              </div>


            </div>





            {/* PRICE + CART */}


            <div className="flex items-center justify-between pt-4 border-t border-slate-800">


              <div>


                <p className="text-xs text-slate-500">

                  Price

                </p>


                <h2 className="text-2xl font-black text-emerald-400">

                  ₹{product.pricePerKg}

                </h2>


                <p className="text-xs text-slate-500">

                  per kg

                </p>


              </div>




              <Button

                size="sm"

                onClick={()=>addToCart(product)}

              >

                <ShoppingCart className="w-4 h-4"/>

                Add

              </Button>


            </div>



          </div>



        </Card>


      ))}


      </div>
                  {/* TRUSTED SELLERS */}

      <section className="mt-16">


        <div className="flex flex-col md:flex-row justify-between gap-4 mb-8">


          <div>

            <h2 className="text-3xl font-black">

              Trusted RENOVA-AI Sellers

            </h2>


            <p className="text-slate-400 mt-2">

              Verified partners contributing to the circular economy.

            </p>

          </div>



          <Button variant="secondary">

            View All Sellers

            <ArrowRight className="w-4 h-4"/>

          </Button>


        </div>



        <div className="grid md:grid-cols-3 gap-6">


          {[
            {
              name:"BioTerra Organics",
              category:"Organic Fertilizer",
              rating:"4.9",
              orders:"2400+ Orders"
            },
            {
              name:"GreenCycle Industries",
              category:"Recycled Materials",
              rating:"4.8",
              orders:"1800+ Orders"
            },
            {
              name:"EcoFarm Solutions",
              category:"Compost Supplier",
              rating:"5.0",
              orders:"3200+ Orders"
            }

          ].map((seller,index)=>(


            <Card key={index}>


              <div className="flex items-center gap-4">


                <div className="w-14 h-14 rounded-xl bg-emerald-500/10 flex items-center justify-center">


                  <Store className="w-7 h-7 text-emerald-400"/>


                </div>



                <div>


                  <h3 className="font-bold text-lg">

                    {seller.name}

                  </h3>


                  <p className="text-sm text-slate-400">

                    {seller.category}

                  </p>


                </div>


              </div>




              <div className="flex justify-between mt-6 text-sm">


                <span className="text-amber-400">

                  ★ {seller.rating}

                </span>


                <span className="text-slate-400">

                  {seller.orders}

                </span>


              </div>


            </Card>


          ))}


        </div>


      </section>





      {/* BENEFITS */}


      <section className="mt-16">


        <div className="grid md:grid-cols-3 gap-6">


          <Card>


            <ShieldCheck className="w-10 h-10 text-emerald-400 mb-5"/>


            <h3 className="text-xl font-bold mb-3">

              Verified Quality

            </h3>


            <p className="text-slate-400 leading-7">

              Every product is checked through
              RENOVA-AI sustainability verification.

            </p>


          </Card>




          <Card>


            <Truck className="w-10 h-10 text-cyan-400 mb-5"/>


            <h3 className="text-xl font-bold mb-3">

              Smart Delivery

            </h3>


            <p className="text-slate-400 leading-7">

              AI optimized logistics reduce delivery
              time and carbon emissions.

            </p>


          </Card>




          <Card>


            <Leaf className="w-10 h-10 text-green-400 mb-5"/>


            <h3 className="text-xl font-bold mb-3">

              Circular Economy

            </h3>


            <p className="text-slate-400 leading-7">

              Convert waste materials into valuable
              sustainable resources.

            </p>


          </Card>


        </div>


      </section>





      {/* FINAL CTA */}


      <section className="mt-20 mb-10">


        <Card className="text-center py-16 bg-gradient-to-r from-emerald-950/50 to-cyan-950/40">


          <Sparkles className="w-14 h-14 text-emerald-400 mx-auto mb-6"/>


          <h2 className="text-4xl font-black mb-6">

            Build a Zero Waste Future

          </h2>


          <p className="max-w-3xl mx-auto text-slate-400 leading-8 mb-10">

            Join RENOVA-AI marketplace and connect
            with farmers, industries, hotels and
            recycling businesses.

          </p>




          <div className="flex justify-center gap-4 flex-wrap">


            <Button size="lg">

              <ShoppingBag className="w-5 h-5"/>

              Start Shopping

            </Button>



            <Button
              size="lg"
              variant="secondary"
            >

              Become Seller

              <ArrowRight className="w-5 h-5"/>

            </Button>


          </div>


        </Card>


      </section>


    </DashboardLayout>

  );

};


export default Marketplace;