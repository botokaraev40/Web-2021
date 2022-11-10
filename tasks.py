# -*- coding: utf-8 -*-

def task1_4():
    nat = "ip nat inside source list ACL interface FastEthernet0/1 overload"
    nat2 = nat.replace('Fast', 'Gigabit')
    print(nat2)

def task2_4():
    mac = "AAAA:BBBB:CCCC"
    mac.replace(':', '.')
    print(mac)

def task3_4():
    config = "switchport trunk allowed vlan 1,3,10,20,30,100"
    result = []
    words = config.split()
    vlans_str = words[-1]
    result = vlans_str.split(',')
    print(result)

def task4_4():
    vlans = [10, 20, 30, 1, 2, 100, 10, 30, 3, 4, 10]
    vlans2 = set(vlans)
    result = list(vlans2)
    print(result)

def task5_4():
    command1 = "switchport trunk allowed vlan 1,2,3,5,8"
    command2 = "switchport trunk allowed vlan 1,3,8,9"
    words1 = command1.split()
    words2 = command2.split()
    vlans_str1 = words1[-1]
    vlans_str2 = words2[-1]
    vlans1 = vlans_str1.split(',')
    vlans2 = vlans_str2.split(',')
    result = list(set(vlans1) & set(vlans2))
    print(result)

def task6_4():
    ospf_route = " 10.0.24.0/24 [110/41] via 10.0.13.3, 3d18h, FastEthernet0/0"
    ospf_route = ospf_route.split()
    print('Prefix\t', ospf_route[0])
    print('AD/Metric\t', ospf_route[1])
    print('Next-Hop\t', ospf_route[3][:-1])
    print('Last update\t', ospf_route[4][:-1])
    print('Outbound Interface\t', ospf_route[5])

def task7_4():
    mac = "D45D:6401:01BC"
    mac_hex = mac.split(":")
    mac_string = mac_hex[0] + mac_hex[1] + mac_hex[2]
    int = int(mac_string, 16)
    result = bin(int)


def task8_4():
    ip = "192.168.3.1"
    ip_split = ip.split(".")
    print(ip_split[0], ' ' * 10, ip_split[1], ' ' * 10, ip_split[2], ' ' * 10, ip_split[3])
    print(bin(int(ip_split[0])), ' ' * 2, bin(int(ip_split[1])), ' ' * 2, bin(int(ip_split[2])), ' ' * 2,
          bin(int(ip_split[3])))

def task51a_5():
    london_co = {
        "r1": {
            "location": "21 New Globe Walk",
            "vendor": "Cisco",
            "model": "4451",
            "ios": "15.4",
            "ip": "10.255.0.1"
        },
        "r2": {
            "location": "21 New Globe Walk",
            "vendor": "Cisco",
            "model": "4451",
            "ios": "15.4",
            "ip": "10.255.0.2"
        },
        "sw1": {
            "location": "21 New Globe Walk",
            "vendor": "Cisco",
            "model": "3850",
            "ios": "3.6.XE",
            "ip": "10.255.0.101",
            "vlans": "10,20,30",
            "routing": True
        }
    }
    device = input('Введите имя устройства: ')
    parameter = input('Введите имя параметра: ')
    print(london_co[device][parameter])


def task51_b():
    london_co = {
        "r1": {
            "location": "21 New Globe Walk",
            "vendor": "Cisco",
            "model": "4451",
            "ios": "15.4",
            "ip": "10.255.0.1"
        },
        "r2": {
            "location": "21 New Globe Walk",
            "vendor": "Cisco",
            "model": "4451",
            "ios": "15.4",
            "ip": "10.255.0.2"
        },
        "sw1": {
            "location": "21 New Globe Walk",
            "vendor": "Cisco",
            "model": "3850",
            "ios": "3.6.XE",
            "ip": "10.255.0.101",
            "vlans": "10,20,30",
            "routing": True
        }
    }

    device = input('Введите имя устройства: ')
    parameters = (','.join(london_co[device].keys()))

    # parameter = input('Введите имя параметра (' + parameters + '): ')
    # parameter = input('Введите имя параметра({parameters}):'.format(parameters=parameters))
    parameter = input(f'Введите имя параметра({parameters}):')
    print(london_co[device][parameter])

def task51_c():
    london_co = {
        "r1": {
            "location": "21 New Globe Walk",
            "vendor": "Cisco",
            "model": "4451",
            "ios": "15.4",
            "ip": "10.255.0.1"
        },
        "r2": {
            "location": "21 New Globe Walk",
            "vendor": "Cisco",
            "model": "4451",
            "ios": "15.4",
            "ip": "10.255.0.2"
        },
        "sw1": {
            "location": "21 New Globe Walk",
            "vendor": "Cisco",
            "model": "3850",
            "ios": "3.6.XE",
            "ip": "10.255.0.101",
            "vlans": "10,20,30",
            "routing": True
        }
    }

def task51_d():
    london_co = {
        "r1": {
            "location": "21 New Globe Walk",
            "vendor": "Cisco",
            "model": "4451",
            "ios": "15.4",
            "ip": "10.255.0.1"
        },
        "r2": {
            "location": "21 New Globe Walk",
            "vendor": "Cisco",
            "model": "4451",
            "ios": "15.4",
            "ip": "10.255.0.2"
        },
        "sw1": {
            "location": "21 New Globe Walk",
            "vendor": "Cisco",
            "model": "3850",
            "ios": "3.6.XE",
            "ip": "10.255.0.101",
            "vlans": "10,20,30",
            "routing": True
        }
    }

    device = input('Введите имя устройства: ')

    parameters = (','.join(london_co[device].keys()))

    # parameter = input('Введите имя параметра (' + parameters + '): ')
    # parameter = input('Введите имя параметра({parameters}):'.format(parameters=parameters))
    parameter = input(f'Введите имя параметра({parameters}):')
    parameter = parameter.lower()
    print(london_co[device].get(parameter, 'Такого параметра нет'))

def task2_5():
    network = input("Введите адрес: ")

    ip, mask = network.split("/")
    ip_list = ip.split(".")
    mask = int(mask)

    oct1, oct2, oct3, oct4 = [
        int(ip_list[0]),
        int(ip_list[1]),
        int(ip_list[2]),
        int(ip_list[3]),
    ]

    bin_mask = "1" * mask + "0" * (32 - mask)
    m1, m2, m3, m4 = [
        int(bin_mask[0:8], 2),
        int(bin_mask[8:16], 2),
        int(bin_mask[16:24], 2),
        int(bin_mask[24:32], 2),
    ]
    print(bin_mask)
    print(m1, m2, m3, m4)

    ip_output = """
    Network:
    {0:<8}  {1:<8}  {2:<8}  {3:<8}
    {0:08b}  {1:08b}  {2:08b}  {3:08b}"""

    mask_output = """
    Mask:
    /{0}
    {1:<8}  {2:<8}  {3:<8}  {4:<8}
    {1:08b}  {2:08b}  {3:08b}  {4:08b}
    """

    print(ip_output.format(oct1, oct2, oct3, oct4))
    print(mask_output.format(mask, m1, m2, m3, m4))

def task3_5():
    access_template = [
        "switchport mode access", "switchport access vlan {}",
        "switchport nonegotiate", "spanning-tree portfast",
        "spanning-tree bpduguard enable"
    ]

    trunk_template = [
        "switchport trunk encapsulation dot1q", "switchport mode trunk",
        "switchport trunk allowed vlan {}"
    ]

    template = {'access': access_template, 'trunk': trunk_template}

    mode = input("mod (access/trunk): ")
    interface = input("interface: ")
    vlan = input("vlan: ")

    print(f"interface {interface}")
    print('\n'.join(template[mode]).format(vlan))

def task53a_5():
    access_template = [
        "switchport mode access", "switchport access vlan {}",
        "switchport nonegotiate", "spanning-tree portfast",
        "spanning-tree bpduguard enable"
    ]

    trunk_template = [
        "switchport trunk encapsulation dot1q", "switchport mode trunk",
        "switchport trunk allowed vlan {}"
    ]

    template = {'access': access_template, 'trunk': trunk_template}
    question = {'access': 'access:'}

    mode = input("input: ")
    interface = input("interface: ")
    vlan = input(f"{question[mode]}")

    print(f"interface {interface}")
    print('\n'.join(template[mode]).format(vlan))


def task61_6():
    mac = ["aabb:cc80:7000", "aabb:dd80:7340", "aabb:ee80:7000", "aabb:ff80:7000"]
    result = []
    for line in mac:
        words = line.split(':')
        line2 = words[0] + '.' + words[1] + '.' + words[2]
        result.append(line2)
    print(result)

def task62_6():

    ip = input("Input IP: ")
    ip_list = ip.split(".")
    oct1, oct2, oct3, oct4 = [
        int(ip_list[0]),
        int(ip_list[1]),
        int(ip_list[2]),
        int(ip_list[3]),
    ]
    if oct1 >= 1 and oct1 <= 223:
        print("unicast")
    elif oct1 >= 224 and oct1 <= 239:
        print("multicast")
    elif ip == '255.255.255.255':
        print("local broadcast")
    elif ip == '0.0.0.0':
        print("unassigned")
    else:
        print("unused")

def task71_7():
    with open('ospf.txt') as f:
        for line in f:
            line = line.split()
            #        print (line)
            o, prefix, admetric, via, nexthop, lastupdate, interface = line
            template = '{:20} {:15}'
            print(template.format('Prefix', prefix))
            print(template.format('AD/Metric', admetric.strip('[]')))
            print(template.format('Next-Hop', nexthop.strip(',')))
            print(template.format('Last update ', lastupdate.strip(',')))
            print(template.format('Outbound Interface', interface))
            print('\n')

def task72_7():
    from sys import argv
    filename = argv[1]

    with open(filename) as f:
        for line in f:
            if '!' in line:
                continue
            else:
                print(line.rstrip('\n'))

def task72_a():
    from sys import argv

    filename = argv[1]
    ignore = ["duplex", "alias", "configuration"]

    with open(filename) as f:
        for line in f:
            for ignore_word in ignore:
                if ignore_word in line:
                    ignore_use = 1
            if not line.startswith("!") and not ignore_use == 1:
                print(line.rstrip())
            ignore_use = 0

def task73_7():
    with open('CAM_table.txt') as f:
        for line in f:
            words = line.split()
            template = '{:15} {:15} {:15}'
            if words and words[0].isdigit():
                vlan, mac, _, ports = words
                #            print(template.format(vlan,mac,ports))
                print(f"{vlan:9}{mac:20}{ports}")

task2_5()
task1_4()
task2_4()
task3_4()
task4_4()
task5_4()
task6_4()
task8_4()
task51a_5()
task51_b()
task51_c()
task51_d()
task2_5()
task3_5()
task53a_5()
task61_6()
task62_6()
task71_7()
task72_7()
task73_7()


