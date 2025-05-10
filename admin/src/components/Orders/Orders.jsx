
useEffect(() => {
  const fetchOrders = async () => {
    try {
      const response = await axios.get(
        'http://localhost:4000/api/orders/getall',
        {
          headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
        }
      );

      const formatted = response.data.map(order => ({
        ...order,
        address: order.address ?? order.shippingAddress?.address ?? '',
        city: order.city ?? order.shippingAddress?.city ?? '',
        zipCode: order.zipCode ?? order.shippingAddress?.zipCode ?? '',
        phone: order.phone ?? '',
        items: order.items?.map(e => ({ _id: e._id, item: e.item, quantity: e.quantity })) || [],
        createdAt: new Date(order.createdAt).toLocaleDateString('en-IN', {
          year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit',
        }),
      }));

      setOrders(formatted);
      setError(null);
    } catch (err) {
      setError(err.response?.data?.message || 'Failed to load orders.');
    } finally {
      setLoading(false);
    }
  };
  fetchOrders();
}, []);
};

export default Orders;