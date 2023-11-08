export default function Add_product_invoice({ isAdd, name, price, quantity, setQuantity, addProduct, handleCancel }) {

  return (
    <div
      id='wrapper'
      onClick={(e) => handleCancel(e)}
      className='absolute left-0 top-0 w-full h-screen bg-slate-400/50'
    >
      <form
        onSubmit={(e) => addProduct(e)}
        className='w-4/12 mx-auto mt-24 p-4 bg-white space-y-3 shadow-lg rounded-lg'
      >
        <input
          name={name}
          value={name}
          className='w-full p-2 focus:outline-none border rounded-md'
          readOnly
        />
        <input
          name={price}
          value={price}
          className='w-full p-2 focus:outline-none border rounded-md'
          readOnly
        />
        <input
          name='qty'
          value={quantity}
          type='number'
          onChange={(e) => setQuantity(Number(e.target.value))}
          autoFocus
          className='w-full p-2 rounded-md border focus:outline-sky-500'
        />
        <div className='flex justify-end'>
          <button
            type='submit'
            className='px-4 py-2 bg-sky-500 text-white rounded-md'
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  )
}