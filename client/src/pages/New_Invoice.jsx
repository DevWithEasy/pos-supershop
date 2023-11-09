import React, { useRef, useState } from 'react';
import BarcodeScanner from '../components/new_invoice/Scanner';
import axios from 'axios';
import baseUrl from '../utils/baseUrl';
import Add_product_invoice from '../components/new_invoice/Add_product_invoice';
import { useToast } from '@chakra-ui/react';
import Product_Select_invoice from '../components/new_invoice/Product_Select_invoice';
import Product_list_invoice from '../components/new_invoice/Product_list_invoice';
import Scanner_Barcode from '../components/new_invoice/Scanner_Barcode';

const New_Invoice = () => {
    const toast = useToast()
    const [isAdd, setIsAdd] = useState(false)
    const [search, setSearch] = useState('')
    const [find, setFind] = useState([])
    const [products, setProducts] = useState([])
    const [_id, set_id] = useState('')
    const [name, setName] = useState('')
    const [price, setPrice] = useState('')
    const [quantity, setQuantity] = useState('')
    const [isSelect, setIsSelect] = useState(false)
    const [scaneSearch, setScaneSearch] = useState('')

    const searchRef = useRef(null)
    const selectRef = useRef(null)

    const handleScanSearch = async (result) => {
        if(scaneSearch === result){
            return
        }

        setScaneSearch(result)
        
        if (!scaneSearch.length === 24) {
            return
        }

        try {
            const res = await axios.get(`${baseUrl}/api/product/find/${scaneSearch}`)
            // setFind(res.data.data)
            // if (selectRef.current) {
            //     selectRef.current.focus();
            // }
            // setIsSelect(!isSelect)
            console.log(res.data.data)
        } catch (error) {
            console.log(error)
        }

    }

    const handleSearch = async (query) => {
        setSearch(query)
        if (!search) {
            return
        }

        try {
            const res = await axios.get(`${baseUrl}/api/product/search?q=${search}`)
            setFind(res.data.data)
            if (selectRef.current) {
                selectRef.current.focus();
            }
            setIsSelect(!isSelect)
        } catch (error) {
            console.log(error)
        }

    }

    const setProduct = (selectedOption) => {
        const product = find.find(product => product._id === selectedOption.value)
        setIsAdd(!isAdd)
        set_id(product._id)
        setName(product.name)
        setPrice(product.price)
        setIsSelect(!isSelect)
    }


    const addProduct = (e) => {
        e.preventDefault()
        if (!quantity) return
        const find = products.find(product => product._id === _id)
        if (find) {
            return toast({
                title: 'already added this product.',
                status: 'error',
                isClosable: true,
            })
        } else {
            setProducts(
                [...products, { _id, name, price, quantity }]

            )
            set_id('')
            setName('')
            setPrice('')
            setQuantity('')
            setIsAdd(!isAdd)
            setSearch('')
            if (searchRef.current) {
                searchRef.current.focus();
            }
        }

    }

    const handleCancel = (e) => {
        if (e.target.id === 'wrapper') {
            set_id('')
            setName('')
            setPrice('')
            setQuantity('')
            setIsAdd(!isAdd)
        }
    }

    const removeProduct = (id) => {
        setProducts(products.filter(product => product._id !== id))
    }

    const handleChangeQuantity = (e) => {
        const newArray = products.map(product => product._id === e.target.name ? { ...product, quantity: Number(e.target.value) } : product)
        setProducts(newArray)
    }

    return (
        <div
            className='relative'
        >
            <BarcodeScanner {...{handleScanSearch}}/>
            {/* <Scanner_Barcode/> */}
            <div
                className='p-2'
            >
                <input
                    type='search'
                    value={search}
                    ref={searchRef}
                    onChange={(e) => handleSearch(e.target.value)}
                    className='mb-2 w-[350px] py-1 px-4 border border-gray-300 focus:outline-none placeholder:text-gray-300 placeholder:text-sm rounded-full'
                    placeholder='find by product name'
                />
            </div>

            <Product_list_invoice {...{ products, handleChangeQuantity, removeProduct }} />

            {find.length > 0 && isSelect &&
                <Product_Select_invoice {...{
                    find,
                    selectRef,
                    setProduct
                }} />
            }

            {
                isAdd && <Add_product_invoice {...{
                    isAdd,
                    name,
                    price,
                    quantity,
                    setQuantity,
                    addProduct,
                    handleCancel
                }} />
            }
        </div>
    );
};

export default New_Invoice;