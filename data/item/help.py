for i in range(921,960):
    n = str(i) + '.json'
    n2 = 't/' + n
    
    f = open(n, 'r', encoding='utf8')
    t = f.readlines()
    f.close()

    fw = open(n2, 'w', encoding = 'utf8')

    for line in t:
        if '"zh-TW"' in line:
            line = line.replace(',', '')

        fw.write(line)
    fw.close()
