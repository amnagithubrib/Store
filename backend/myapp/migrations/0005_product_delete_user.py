# Generated by Django 4.1.12 on 2023-11-08 19:19

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('myapp', '0004_user_delete_product'),
    ]

    operations = [
        migrations.CreateModel(
            name='Product',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=255)),
                ('description', models.TextField()),
                ('price', models.FloatField()),
                ('category', models.CharField(max_length=255)),
                ('brand', models.CharField(max_length=255)),
                ('stock', models.IntegerField()),
            ],
        ),
        migrations.DeleteModel(
            name='User',
        ),
    ]
