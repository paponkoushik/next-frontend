import {
  CheckCircle,
  GracenoteLogo, NotificationLogo,
  SentimentDissatisfied,
  SentimentSatisfied,
  SentimentVeryDissatisfied,
  SentimentVerySatisfied
} from "@/components/svgs";
import {Dialog, Disclosure, Menu, Transition} from "@headlessui/react";
import {Fragment, useState} from "react";
import {Bars3Icon, BellIcon, XMarkIcon} from "@heroicons/react/24/outline";

const user = {
  name: 'Tom Cook',
  email: 'tom@example.com',
  imageUrl:
    'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
}
const navigation = [
  { name: 'Dashboard', href: '#', current: true },
  { name: 'Team', href: '#', current: false },
  { name: 'Projects', href: '#', current: false },
  { name: 'Calendar', href: '#', current: false },
  { name: 'Reports', href: '#', current: false },
]

function classNames(...classes: any[]) {
  return classes.filter(Boolean).join(' ')
}

export default function TopBar() {
  const [modalOpen, setModalOpen] = useState<boolean>(false)
  const [successModalOpen, setSuccessModalOpen] = useState<boolean>(false)

  function sendFeedback() {
    setModalOpen(false)
    setSuccessModalOpen(true)
    setTimeout(() => {
      setSuccessModalOpen(false)
    }, 5000)
  }

  return (
    <>
      <Disclosure as="nav" className="bg-white">
        {({ open }) => (
          <>
            <div className="mx-auto max-w-full px-4 sm:px-6 lg:px-8  border-b border-zinc-200 dark:text-zinc-950 dark:border-zinc-200">
              <div className="flex h-16 items-center justify-between">
                <div className="flex items-center">
                  <div className="flex-shrink-0">
                    <GracenoteLogo className="h-5 w-6 text-zinc-950" />
                  </div>
                  <div className="hidden md:block">
                    <div className="ml-10 flex items-baseline space-x-4">
                      {navigation.map((item) => (
                        <a
                          key={item.name}
                          href={item.href}
                          className={classNames(
                            item.current
                              ? 'inline-block p-4 text-zinc-950 border-b-2 border-zinc-950 rounded-t-lg active dark:text-zinc-950 dark:border-zinc-950'
                              : 'inline-block p-4 text-zinc-500 border-b-2 border-transparent rounded-t-lg hover:text-zinc-500 hover:border-zinc-500 dark:hover:text-zinc-500',
                            'font-medium mr-2'
                          )}
                          aria-current={item.current ? 'page' : undefined}
                        >
                          {item.name}
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="hidden md:block">
                  <div className="ml-4 flex items-center md:ml-6">
                    <div>
                      <div className="px-4">
                        <button onClick={() => { setModalOpen(true) }}
                                className="bg-white hover:bg-gray-100 text-zinc-950 font-semibold py-1 px-4 border border-zinc-200 rounded">
                          Feedback
                        </button>
                      </div>
                      <Transition
                        show={modalOpen}
                        as={Fragment}
                      >
                        <Dialog onClose={() => setModalOpen(false)}>
                          <Transition.Child
                            className="fixed inset-0 z-[99999] flex p-6"
                            enter="transition ease-out duration-300"
                            enterFrom="opacity-0 scale-10"
                            enterTo="opacity-100 scale-10"
                            leave="transition ease-out duration-200"
                            leaveFrom="opacity-100 scale-10"
                            leaveTo="opacity-0 scale-10"
                          >
                            <div className="absolute right-8 z-10 mt-8 w-80 h-48 origin-top-right rounded-md bg-white py-1 shadow-zinc-50 ring-1 ring-zinc-950 ring-opacity-10 focus:outline-none">
                              <Dialog.Panel>
                                <div className="flex w-full gap-6 p-4">
                                  <div className="relative h-28 w-full min-w-[200px]">
                                    <input
                                      className="peer h-full w-full rounded-[7px] border border-zinc-950
                                          border-t-transparent bg-transparent px-3 py-2.5
                                          font-sans text-sm font-normal text-zinc-500
                                          outline outline-0 transition-all placeholder-shown:border
                                          placeholder-shown:border-zinc-200 placeholder-shown:border-t-zinc-200
                                          focus:border-2 focus:border-zinc-200 focus:border-t-transparent focus:outline-0
                                          disabled:border-0 disabled:bg-zinc-50"
                                      placeholder=""
                                    />
                                    <label className="before:content[' '] after:content[' ']
                                      pointer-events-none absolute left-0 -top-1.5
                                      flex h-full w-full select-none text-[11px] font-normal
                                      leading-tight text-zinc-500
                                      transition-all before:pointer-events-none
                                      before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-zinc-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-inc-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-zinc-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-zinc-500 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:border-zinc-200 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:border-zinc-200 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-zinc-500">
                                      Ideas to improve this page
                                    </label>
                                  </div>
                                </div>
                                <hr/>
                                <div className="flex w-full relative p-4 bg-zinc-50 justify-between">
                                  <div className="flex relative gap-4 pt-2">
                                    <SentimentVerySatisfied className="h-6 w-6"/>
                                    <SentimentSatisfied className="h-6 w-6"/>
                                    <SentimentDissatisfied className="h-6 w-6"/>
                                    <SentimentVeryDissatisfied className="h-6 w-6"/>
                                  </div>
                                  <div>
                                    <button onClick={sendFeedback}
                                            className="bg-zinc-800 hover:bg-zinc-950 text-white py-2 px-4 border border-zinc-200 rounded">
                                      Send
                                    </button>
                                  </div>
                                </div>

                              </Dialog.Panel>
                            </div>
                          </Transition.Child>
                        </Dialog>
                      </Transition>

                      <Transition
                        show={successModalOpen}
                        as={Fragment}
                      >
                        <Dialog onClose={() => setSuccessModalOpen(false)}>
                          <Transition.Child
                            className="fixed inset-0 z-[99999] flex p-6"
                            enter="transition ease-out duration-300"
                            enterFrom="opacity-0 scale-10"
                            enterTo="opacity-100 scale-10"
                            leave="transition ease-out duration-200"
                            leaveFrom="opacity-100 scale-10"
                            leaveTo="opacity-0 scale-10"
                          >
                            <div className="absolute right-8 z-10 mt-8 w-80 h-40 origin-top-right rounded-md bg-white py-1 shadow-zinc-50 ring-1 ring-zinc-950 ring-opacity-10 focus:outline-none">
                              <Dialog.Panel>
                                <div className="mt-3 text-center">
                                  <div
                                    className="mx-auto flex items-center justify-center h-12 w-12 rounded-full text-zinc-500"
                                  >
                                    <CheckCircle className="h-8 w-8"/>
                                  </div>
                                  <h3 className="text-lg leading-6 font-medium text-zinc-950">Thanks for your feedback!</h3>
                                  <div className="mt-2 px-7 py-3">
                                    <p className="text-sm text-zinc-500">
                                      We will be in touch soon.
                                    </p>
                                  </div>
                                </div>
                              </Dialog.Panel>
                            </div>
                          </Transition.Child>
                        </Dialog>
                      </Transition>
                    </div>

                    <button>
                      <NotificationLogo className="h-6 w-6 text-zinc-500" />
                    </button>
                    {/* Profile dropdown */}
                    <Menu as="div" className="relative ml-3">
                      <div>
                        <Menu.Button className="relative flex max-w-xs items-center rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                          <span className="absolute -inset-1.5" />
                          <span className="sr-only">Open user menu</span>
                          <img className="h-8 w-8 rounded-full" src={user.imageUrl} alt="" />
                        </Menu.Button>
                      </div>
                    </Menu>
                  </div>
                </div>
                <div className="-mr-2 flex md:hidden">
                  {/* Mobile menu button */}
                  <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md bg-gray-800 p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                    <span className="absolute -inset-0.5" />
                    <span className="sr-only">Open main menu</span>
                    {open ? (
                      <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                    ) : (
                      <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                    )}
                  </Disclosure.Button>
                </div>
              </div>
            </div>

            <Disclosure.Panel className="md:hidden">
              <div className="space-y-1 px-2 pb-3 pt-2 sm:px-3">
                {navigation.map((item) => (
                  <Disclosure.Button
                    key={item.name}
                    as="a"
                    href={item.href}
                    className={classNames(
                      item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                      'block rounded-md px-3 py-2 text-base font-medium'
                    )}
                    aria-current={item.current ? 'page' : undefined}
                  >
                    {item.name}
                  </Disclosure.Button>
                ))}
              </div>
              <div className="border-t border-gray-700 pb-3 pt-4">
                <div className="flex items-center px-5">
                  <div className="flex-shrink-0">
                    <img className="h-10 w-10 rounded-full" src={user.imageUrl} alt="" />
                  </div>
                  <div className="ml-3">
                    <div className="text-base font-medium leading-none text-white">{user.name}</div>
                    <div className="text-sm font-medium leading-none text-gray-400">{user.email}</div>
                  </div>
                  <button
                    type="button"
                    className="relative ml-auto flex-shrink-0 rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                  >
                    <span className="absolute -inset-1.5" />
                    <span className="sr-only">View notifications</span>
                    <BellIcon className="h-6 w-6" aria-hidden="true" />
                  </button>
                </div>
              </div>
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>
    </>
  )
}