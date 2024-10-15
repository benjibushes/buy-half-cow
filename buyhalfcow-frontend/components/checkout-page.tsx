'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { CreditCard, Beef } from 'lucide-react'
import Link from 'next/link'

export function CheckoutPageComponent() {
  const [cardNumber, setCardNumber] = useState('')
  const [expiry, setExpiry] = useState('')
  const [cvc, setCvc] = useState('')

  const cartItems = [
    { id: 1, name: "Half Cow", price: 1500, quantity: 1 },
    { id: 2, name: "Assorted Cuts Box", price: 200, quantity: 1 },
  ]

  const subtotal = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0)
  const shipping = 50
  const total = subtotal + shipping

  return (
    <div className="flex flex-col min-h-screen bg-antiqueWhite">
      <header className="bg-deer shadow-sm">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-4">
            <Beef className="h-8 w-8 text-sepia" />
            <span className="text-2xl font-bold text-bistre">BuyHalfCow.com</span>
          </Link>
        </div>
      </header>

      <main className="flex-grow container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8 text-bistre">Checkout</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <Card className="bg-deer mb-8">
              <CardHeader>
                <CardTitle className="text-bistre">Shipping Information</CardTitle>
              </CardHeader>
              <CardContent>
                <form className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="first-name" className="text-bistre">First Name</Label>
                      <Input id="first-name" className="bg-antiqueWhite text-bistre" />
                    </div>
                    <div>
                      <Label htmlFor="last-name" className="text-bistre">Last Name</Label>
                      <Input id="last-name" className="bg-antiqueWhite text-bistre" />
                    </div>
                  </div>
                  <div>
                    <Label htmlFor="address" className="text-bistre">Address</Label>
                    <Input id="address" className="bg-antiqueWhite text-bistre" />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="city" className="text-bistre">City</Label>
                      <Input id="city" className="bg-antiqueWhite text-bistre" />
                    </div>
                    <div>
                      <Label htmlFor="zip" className="text-bistre">ZIP Code</Label>
                      <Input id="zip" className="bg-antiqueWhite text-bistre" />
                    </div>
                  </div>
                </form>
              </CardContent>
            </Card>
            <Card className="bg-deer">
              <CardHeader>
                <CardTitle className="text-bistre">Payment Method</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center space-x-2">
                  <CreditCard className="h-5 w-5 text-sepia" />
                  <span className="text-bistre font-medium">Credit Card</span>
                </div>
                <form className="mt-4 space-y-4">
                  <div>
                    <Label htmlFor="card-number" className="text-bistre">Card Number</Label>
                    <Input 
                      id="card-number" 
                      className="bg-antiqueWhite text-bistre" 
                      value={cardNumber}
                      onChange={(e) => setCardNumber(e.target.value)}
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="expiry" className="text-bistre">Expiry Date</Label>
                      <Input 
                        id="expiry" 
                        placeholder="MM/YY" 
                        className="bg-antiqueWhite text-bistre" 
                        value={expiry}
                        onChange={(e) => setExpiry(e.target.value)}
                      />
                    </div>
                    <div>
                      <Label htmlFor="cvc" className="text-bistre">CVC</Label>
                      <Input 
                        id="cvc" 
                        className="bg-antiqueWhite text-bistre" 
                        value={cvc}
                        onChange={(e) => setCvc(e.target.value)}
                      />
                    </div>
                  </div>
                </form>
              </CardContent>
            </Card>
          </div>
          <div>
            <Card className="bg-deer">
              <CardHeader>
                <CardTitle className="text-bistre">Order Summary</CardTitle>
              </CardHeader>
              <CardContent>
                {cartItems.map((item) => (
                  <div key={item.id} className="flex justify-between mb-2">
                    <span className="text-bistre">{item.name} x {item.quantity}</span>
                    <span className="text-sepia">${item.price * item.quantity}</span>
                  </div>
                ))}
                <div className="border-t border-sepia my-4"></div>
                <div className="flex justify-between mb-2">
                  <span className="text-bistre">Subtotal</span>
                  <span className="text-sepia">${subtotal}</span>
                </div>
                <div className="flex justify-between mb-2">
                  <span className="text-bistre">Shipping</span>
                  <span className="text-sepia">${shipping}</span>
                </div>
                <div className="border-t border-sepia my-4"></div>
                <div className="flex justify-between font-bold">
                  <span className="text-bistre">Total</span>
                  <span className="text-sepia">${total}</span>
                </div>
              </CardContent>
              <CardFooter>
                <Button className="w-full btn-primary">
                  <CreditCard className="mr-2 h-4 w-4" /> Place Order
                </Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </main>

      <footer className="bg-bistre text-antiqueWhite py-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">About BuyHalfCow.com</h3>
              <p>Connecting consumers with local ranchers for sustainable, high-quality beef.</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li><Link href="/ranchers" className="hover:text-deepChampagne">Browse Ranchers</Link></li>
                <li><Link href="/how-it-works" className="hover:text-deepChampagne">How It Works</Link></li>
                <li><Link href="/about" className="hover:text-deepChampagne">About Us</Link></li>
                <li><Link href="/contact" className="hover:text-deepChampagne">Contact</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Connect With Us</h3>
              <div className="flex space-x-4">
                <a href="#" className="hover:text-deepChampagne"><svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg></a>
                <a href="#" className="hover:text-deepChampagne"><svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24"><path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/></svg></a>
                <a href="#" className="hover:text-deepChampagne"><svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z"/></svg></a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}