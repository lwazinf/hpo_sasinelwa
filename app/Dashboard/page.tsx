'use client'

import React, { useState } from 'react';
import { 
  Search, Plus, Phone, Mail, MapPin, Home, Calendar, Heart, Edit, 
  MoreHorizontal, Bell, Menu, Grid, List, Filter, ChevronDown, 
  User, Settings, Video, MessageSquare
} from 'lucide-react';
import { Button } from '../../components/ui/button';
import { Input } from '../../components/ui/input';
import { ScrollArea } from '../../components/ui/scroll-area';
import { Avatar, AvatarFallback, AvatarImage } from '../../components/ui/avatar';
import { Badge } from '../../components/ui/badge';
import { cn } from '../../lib/utils';

export default function ContactsApp() {
  const [selectedContact, setSelectedContact] = useState(4);

  const contacts = [
    {
      id: 1,
      name: "Dad",
      category: "Family",
      phone: "+1 (484) 438 50 49",
      email: "adams_john@gmail.com",
      isPinned: true,
      initials: "D"
    },
    {
      id: 2,
      name: "Mom",
      category: "Family",
      phone: "+1 (484) 709 42 76",
      email: "brenda_adams09@hotmail.com",
      isPinned: true,
      initials: "M"
    },
    {
      id: 3,
      name: "Anna",
      category: "Family, Job",
      phone: "+1 (584) 293 88 56",
      email: "ana_rachel@hotmail.com",
      initials: "A"
    },
    {
      id: 4,
      name: "Bobby Crown",
      category: "Job, Family",
      phone: "+1 (484) 288 60 28",
      email: "crown2919@hotmail.com",
      address: "7804 Rowe Roads",
      location: "San Francisco, CA, USA",
      dob: "04.05.1993",
      relationship: "Brother",
      company: "Google Inc, Sales Manager",
      initials: "BC",
      image: "/api/placeholder/200/200"
    },
    {
      id: 5,
      name: "Brandon",
      category: "Family",
      phone: "+1 (484) 995 84 37",
      email: "bud81@yahoo.com",
      initials: "B"
    },
    {
      id: 6,
      name: "David",
      category: "Sports, Family",
      phone: "+1 (484) 332 22 32",
      email: "dave_j@hotmail.com",
      initials: "D"
    },
    {
      id: 7,
      name: "Diana",
      category: "",
      phone: "+1 (484) 812 32 01",
      email: "jk_diana@gmail.com",
      initials: "D"
    },
    {
      id: 8,
      name: "Gino",
      category: "Gaming, Family",
      phone: "+1 (484) 381 44 56",
      email: "ginosaurus@hotmail.com",
      initials: "G"
    },
    {
      id: 9,
      name: "Jerry",
      category: "Developers, Family",
      phone: "+1 (484) 132 61 43",
      email: "jerrycooleceratops.com",
      initials: "J"
    },
    {
      id: 10,
      name: "Jeffrey Macejkovic",
      category: "",
      phone: "+1 (484) 576 90 92",
      email: "macejkovc@gmail.com",
      initials: "JM"
    }
  ];

  const tags = [
    "Job", "Family", "Friends", "Sports", "Developers", "Designers", "Gaming", "All tags"
  ];

  const reminders = [
    {
      id: 1,
      contact: "Bobby Crown",
      task: "to discuss a present for mom",
      time: "03.16, 11:00 AM"
    }
  ];

  const events = [
    {
      id: 1,
      date: "MAR 14",
      title: "Bobby Crown's Birthday Party",
      time: "6:00 PM",
      attendees: 16
    }
  ];

  const notes = [
    {
      id: 1,
      title: "Gift Ideas",
      content: "Mom has just thinking about some gift ideas for mom. I thought it would be a good idea if we brainstormed some ideas together and came up with something that she would really love. Maybe getting her tickets to a show or concert, or planning a special day trip or weekend getaway for her."
    }
  ];

  const selectedContactData = contacts.find(c => c.id === selectedContact);

  return (
    <div className="flex h-screen bg-black text-white overflow-hidden">
      {/* Left Sidebar */}
      <div className="w-[320px] bg-[#18181b] border-r border-zinc-800 flex flex-col">
        {/* Header */}
        <div className="h-16 px-4 flex items-center justify-between border-b border-zinc-800">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">a</span>
            </div>
            <span className="font-semibold">alloy</span>
          </div>
          <Button variant="ghost" size="icon" className="h-8 w-8">
            <Bell className="h-4 w-4" />
          </Button>
        </div>

        {/* Search */}
        <div className="px-4 py-3">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-zinc-500" />
            <Input
              type="text"
              placeholder="Search"
              className="pl-9 bg-zinc-900 border-zinc-800 h-9 text-sm"
            />
          </div>
        </div>

        {/* Navigation */}
        <div className="px-3 space-y-0.5">
          <NavItem icon={User} label="All People" />
          <NavItem icon={Grid} label="All Businesses" />
          <NavItem icon={Heart} label="Favorites" />
          <div className="pt-1">
            <NavItem icon={Menu} label="Tags" hasChevron />
          </div>
        </div>

        {/* Tags List */}
        <ScrollArea className="flex-1 px-3 py-2">
          <div className="space-y-0.5 pl-6">
            {tags.map((tag, index) => (
              <TagItem key={index} label={tag} />
            ))}
          </div>
        </ScrollArea>

        {/* Smart Tags & Events */}
        <div className="px-3 py-2 space-y-0.5">
          <NavItem icon={Grid} label="Smart Tags" hasChevron />
          <NavItem icon={Calendar} label="Events" />
        </div>

        {/* Contact Count */}
        <div className="px-4 py-3 border-t border-zinc-800">
          <Button variant="ghost" className="w-full justify-between h-auto py-2 px-3 hover:bg-zinc-800">
            <span className="text-3xl font-bold">41</span>
            <ChevronDown className="h-4 w-4 text-zinc-400" />
          </Button>
        </div>

        {/* Add Contact Button */}
        <div className="p-4">
          <Button className="w-full bg-blue-600 hover:bg-blue-700 h-10">
            <Plus className="h-5 w-5 mr-2" />
            Add Contact
          </Button>
        </div>
      </div>

      {/* Contacts List */}
      <div className="flex-1 bg-black flex flex-col min-w-0">
        {/* Header */}
        <div className="h-auto px-6 py-4 border-b border-zinc-800">
          <div className="flex items-center justify-between mb-3">
            <h1 className="text-2xl font-semibold">Contacts</h1>
            <div className="flex items-center gap-1">
              <Button variant="ghost" size="icon" className="h-9 w-9">
                <List className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="h-9 w-9">
                <Grid className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="h-9 w-9">
                <Filter className="h-5 w-5" />
              </Button>
            </div>
          </div>
          <div className="flex items-center gap-4 text-sm">
            <Button variant="ghost" className="h-auto p-0 text-zinc-400 hover:text-white hover:bg-transparent">
              Filter by <ChevronDown className="ml-1 h-4 w-4" />
            </Button>
            <Button variant="ghost" className="h-auto p-0 text-zinc-400 hover:text-white hover:bg-transparent">
              A-Z <ChevronDown className="ml-1 h-4 w-4" />
            </Button>
          </div>
        </div>

        {/* Contacts ScrollArea */}
        <ScrollArea className="flex-1">
          {/* Pinned Contacts */}
          <div className="px-6 py-3 border-b border-zinc-800">
            <div className="text-[10px] font-semibold text-zinc-500 mb-2 tracking-wider">PINNED</div>
            {contacts.filter(c => c.isPinned).map((contact) => (
              <ContactItem
                key={contact.id}
                contact={contact}
                onClick={() => setSelectedContact(contact.id)}
                isSelected={selectedContact === contact.id}
              />
            ))}
          </div>

          {/* All Contacts */}
          <div className="px-6 py-3">
            <div className="text-[10px] font-semibold text-zinc-500 mb-2 tracking-wider">A</div>
            {contacts.filter(c => !c.isPinned && c.name.startsWith('A')).map((contact) => (
              <ContactItem
                key={contact.id}
                contact={contact}
                onClick={() => setSelectedContact(contact.id)}
                isSelected={selectedContact === contact.id}
              />
            ))}
          </div>

          <div className="px-6 py-3">
            <div className="text-[10px] font-semibold text-zinc-500 mb-2 tracking-wider">B</div>
            {contacts.filter(c => !c.isPinned && c.name.startsWith('B')).map((contact) => (
              <ContactItem
                key={contact.id}
                contact={contact}
                onClick={() => setSelectedContact(contact.id)}
                isSelected={selectedContact === contact.id}
              />
            ))}
          </div>

          <div className="px-6 py-3">
            <div className="text-[10px] font-semibold text-zinc-500 mb-2 tracking-wider">D</div>
            {contacts.filter(c => !c.isPinned && c.name.startsWith('D')).map((contact) => (
              <ContactItem
                key={contact.id}
                contact={contact}
                onClick={() => setSelectedContact(contact.id)}
                isSelected={selectedContact === contact.id}
              />
            ))}
          </div>

          <div className="px-6 py-3">
            <div className="text-[10px] font-semibold text-zinc-500 mb-2 tracking-wider">G</div>
            {contacts.filter(c => !c.isPinned && c.name.startsWith('G')).map((contact) => (
              <ContactItem
                key={contact.id}
                contact={contact}
                onClick={() => setSelectedContact(contact.id)}
                isSelected={selectedContact === contact.id}
              />
            ))}
          </div>

          <div className="px-6 py-3">
            <div className="text-[10px] font-semibold text-zinc-500 mb-2 tracking-wider">J</div>
            {contacts.filter(c => !c.isPinned && c.name.startsWith('J')).map((contact) => (
              <ContactItem
                key={contact.id}
                contact={contact}
                onClick={() => setSelectedContact(contact.id)}
                isSelected={selectedContact === contact.id}
              />
            ))}
          </div>
        </ScrollArea>

        {/* User Profile Footer */}
        <div className="px-6 py-4 border-t border-zinc-800">
          <div className="flex items-center gap-3">
            <Avatar className="h-8 w-8">
              <AvatarFallback className="bg-zinc-700 text-sm">DA</AvatarFallback>
            </Avatar>
            <span className="font-medium text-sm">Dexter Adams</span>
            <Button variant="ghost" size="icon" className="h-8 w-8 ml-auto">
              <Settings className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>

      {/* Right Panel - Contact Details */}
      {selectedContactData && (
        <div className="w-[400px] bg-[#18181b] border-l border-zinc-800 flex flex-col">
          <ScrollArea className="flex-1">
            {/* Contact Header */}
            <div className="p-6 border-b border-zinc-800">
              <div className="flex justify-end mb-4">
                <Button variant="ghost" size="icon" className="h-8 w-8">
                  <MoreHorizontal className="h-5 w-5" />
                </Button>
              </div>
              <div className="text-center">
                <Avatar className="w-32 h-32 mx-auto mb-4">
                  {selectedContactData.image ? (
                    <AvatarImage src={selectedContactData.image} alt={selectedContactData.name} />
                  ) : (
                    <AvatarFallback className="bg-zinc-700 text-4xl">
                      {selectedContactData.initials}
                    </AvatarFallback>
                  )}
                </Avatar>
                <h2 className="text-2xl font-semibold mb-1">{selectedContactData.name}</h2>
                <div className="flex items-center justify-center gap-2 text-sm text-zinc-400 mb-4">
                  <span>Method</span>
                  <div className="flex items-center gap-1">
                    <div className="w-3 h-3 bg-blue-600 rounded-full"></div>
                    <span>Pro</span>
                  </div>
                </div>
                <div className="flex items-center justify-center gap-2 mb-4">
                  <Button variant="ghost" size="icon" className="h-10 w-10 bg-zinc-800 hover:bg-zinc-700">
                    <Phone className="h-5 w-5" />
                  </Button>
                  <Button variant="ghost" size="icon" className="h-10 w-10 bg-zinc-800 hover:bg-zinc-700">
                    <Video className="h-5 w-5" />
                  </Button>
                  <Button variant="ghost" size="icon" className="h-10 w-10 bg-zinc-800 hover:bg-zinc-700">
                    <MessageSquare className="h-5 w-5" />
                  </Button>
                </div>
                <div className="flex items-center justify-center gap-2 text-xs">
                  <Badge variant="secondary" className="bg-zinc-800 hover:bg-zinc-700 text-zinc-300 border-0">
                    Job
                  </Badge>
                  <Badge variant="secondary" className="bg-zinc-800 hover:bg-zinc-700 text-zinc-300 border-0">
                    Family
                  </Badge>
                  <Button variant="ghost" size="icon" className="h-6 w-6 rounded-full bg-zinc-800 hover:bg-zinc-700">
                    <Plus className="h-3 w-3" />
                  </Button>
                </div>
                {selectedContactData.company && (
                  <p className="text-xs text-zinc-400 mt-3">{selectedContactData.company}</p>
                )}
              </div>
            </div>

            {/* Contact Information */}
            <div className="p-6 space-y-4 border-b border-zinc-800">
              <div className="flex items-center gap-3 group">
                <Phone className="h-5 w-5 text-zinc-400 flex-shrink-0" />
                <span className="flex-1 text-sm">{selectedContactData.phone}</span>
                <Button variant="ghost" size="icon" className="h-8 w-8 opacity-0 group-hover:opacity-100">
                  <Edit className="h-4 w-4 text-zinc-400" />
                </Button>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-zinc-400 flex-shrink-0" />
                <span className="flex-1 text-sm">{selectedContactData.email}</span>
              </div>
              {selectedContactData.location && (
                <div className="flex items-center gap-3">
                  <MapPin className="h-5 w-5 text-zinc-400 flex-shrink-0" />
                  <span className="flex-1 text-sm">{selectedContactData.location}</span>
                </div>
              )}
              {selectedContactData.address && (
                <div className="flex items-center gap-3">
                  <Home className="h-5 w-5 text-zinc-400 flex-shrink-0" />
                  <span className="flex-1 text-sm">{selectedContactData.address}</span>
                </div>
              )}
              {selectedContactData.dob && (
                <div className="flex items-center gap-3">
                  <Calendar className="h-5 w-5 text-zinc-400 flex-shrink-0" />
                  <span className="flex-1 text-sm">{selectedContactData.dob}</span>
                </div>
              )}
              {selectedContactData.relationship && (
                <div className="flex items-center gap-3">
                  <Heart className="h-5 w-5 text-zinc-400 flex-shrink-0" />
                  <span className="flex-1 text-sm">{selectedContactData.relationship}</span>
                </div>
              )}
            </div>

            {/* Reminders */}
            <div className="p-6 border-b border-zinc-800">
              <h3 className="font-semibold mb-3 text-sm">Reminders</h3>
              {reminders.map((reminder) => (
                <div key={reminder.id} className="bg-zinc-800 rounded-lg p-3 mb-3">
                  <div className="flex items-start gap-2 text-sm">
                    <span className="text-zinc-300">Call</span>
                    <Avatar className="h-5 w-5">
                      <AvatarFallback className="bg-zinc-700 text-[10px]">BC</AvatarFallback>
                    </Avatar>
                    <span className="text-blue-400">{reminder.contact}</span>
                    <span className="text-zinc-400">{reminder.task}</span>
                    <span className="text-xs text-zinc-500 ml-auto whitespace-nowrap">{reminder.time}</span>
                    <Button variant="ghost" size="icon" className="h-6 w-6 -mt-1">
                      <MoreHorizontal className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              ))}
              <Button variant="ghost" className="w-full text-zinc-400 hover:text-white h-9">
                <Plus className="h-4 w-4 mr-2" />
                Add Reminder
              </Button>
            </div>

            {/* Upcoming Events */}
            <div className="p-6 border-b border-zinc-800">
              <h3 className="font-semibold mb-3 text-sm">Upcoming events</h3>
              {events.map((event) => (
                <div key={event.id} className="bg-zinc-800 rounded-lg p-3 mb-3">
                  <div className="flex items-center gap-3">
                    <div className="bg-zinc-900 rounded-lg px-2.5 py-1.5 text-center min-w-[44px]">
                      <div className="text-[10px] text-zinc-400 uppercase">{event.date.split(' ')[0]}</div>
                      <div className="text-lg font-bold leading-none">{event.date.split(' ')[1]}</div>
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="text-sm">
                        <span className="text-blue-400">{event.title.split("'")[0]}&apos;s</span>
                        <span> {event.title.split("'s ")[1]}</span>
                      </div>
                      <div className="text-xs text-zinc-400">{event.time}</div>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <div className="flex -space-x-2">
                        <Avatar className="h-6 w-6 border-2 border-zinc-800">
                          <AvatarFallback className="bg-zinc-700 text-[10px]">A</AvatarFallback>
                        </Avatar>
                        <Avatar className="h-6 w-6 border-2 border-zinc-800">
                          <AvatarFallback className="bg-zinc-700 text-[10px]">B</AvatarFallback>
                        </Avatar>
                      </div>
                      <span className="text-xs text-zinc-400">+{event.attendees}</span>
                    </div>
                  </div>
                </div>
              ))}
              <Button variant="ghost" className="w-full text-zinc-400 hover:text-white h-9">
                <Plus className="h-4 w-4 mr-2" />
                Add Event
              </Button>
            </div>

            {/* Notes */}
            <div className="p-6">
              <h3 className="font-semibold mb-3 text-sm">Notes</h3>
              {notes.map((note) => (
                <div key={note.id} className="bg-zinc-800 rounded-lg p-4 mb-3">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-medium text-sm">{note.title}</h4>
                    <Button variant="ghost" size="icon" className="h-6 w-6">
                      <MoreHorizontal className="h-4 w-4" />
                    </Button>
                  </div>
                  <p className="text-xs text-zinc-400 leading-relaxed">{note.content}</p>
                </div>
              ))}
              <Button variant="ghost" className="w-full text-zinc-400 hover:text-white h-9">
                <Plus className="h-4 w-4 mr-2" />
                Add Note
              </Button>
            </div>
          </ScrollArea>
        </div>
      )}
    </div>
  );
}

function NavItem({ icon: Icon, label, hasChevron }) {
  return (
    <Button
      variant="ghost"
      className="w-full justify-between h-9 px-3 hover:bg-zinc-800 text-zinc-300 hover:text-white font-normal"
    >
      <div className="flex items-center gap-2">
        <Icon className="h-4 w-4" />
        <span className="text-sm">{label}</span>
      </div>
      {hasChevron && <ChevronDown className="h-4 w-4 text-zinc-400" />}
    </Button>
  );
}

function TagItem({ label }) {
  return (
    <Button
      variant="ghost"
      className="w-full justify-start h-8 px-3 hover:bg-zinc-800 text-zinc-400 hover:text-white font-normal"
    >
      <span className="text-sm">{label}</span>
    </Button>
  );
}

function ContactItem({ contact, onClick, isSelected }) {
  return (
    <div
      onClick={onClick}
      className={cn(
        "flex items-center gap-3 p-3 rounded-lg cursor-pointer mb-1 group",
        isSelected ? "bg-zinc-800" : "hover:bg-zinc-800/50"
      )}
    >
      <Avatar className="h-10 w-10 flex-shrink-0">
        <AvatarFallback className="bg-zinc-700 text-sm">
          {contact.initials}
        </AvatarFallback>
      </Avatar>
      <div className="flex-1 min-w-0">
        <div className="font-medium text-sm">{contact.name}</div>
        {contact.category && (
          <div className="text-xs text-zinc-500 truncate">{contact.category}</div>
        )}
      </div>
      <div className="text-right text-sm text-zinc-400 flex-shrink-0">
        <div className="text-xs mb-0.5">{contact.phone}</div>
        <div className="text-[11px] text-zinc-500 truncate max-w-[140px]">{contact.email}</div>
      </div>
      <Button
        variant="ghost"
        size="icon"
        className="h-8 w-8 opacity-0 group-hover:opacity-100 flex-shrink-0"
      >
        <MoreHorizontal className="h-4 w-4" />
      </Button>
    </div>
  );
}